import { FieldParser } from '../src/mappers/fieldParser';
import { FieldMapper } from '../src/mappers/fieldMapping';

describe('FieldParser', () => {
  const data = `@\n\u001e\rANSI 636015090002DL00410280ZT03210007DLDCAC\nDCBNONE\nDCDNONE\nDBA10232031\nDCSLEWANDOWSKI\nDDEN\nDACJAMES\nDDFN\nDADCLAIR\nDDGN\nDBD11062023\nDBB10231986\nDBC1\nDAYHAZ\nDAU077 in\nDAG8830 HIDDEN POND ST\nDAINORTHLAKE\nDAJTX\nDAK762470000\nDAQ42145201\nDCF00121301114026256231\nDCGUSA\nDAZBRO\nDCK10022062600\nDCLWO\nDDAF\nDDB07162021\nDAW350\nDCUJR\nDDFT\nDDGN\nDDEN\n\rZTZTAN\r`;
  const fieldMapper = new FieldMapper();
  const parser = new FieldParser(data, fieldMapper);

  describe('parseString', () => {
    it('should parse string fields correctly', () => {
      expect(parser.parseString('state')).toBe('TX');
    });

    it('should parse first name correctly', () => {
      expect(parser.parseString('firstName')).toBe('JAMES');
    });

    it('should parse last name correctly', () => {
      expect(parser.parseString('lastName')).toBe('LEWANDOWSKI');
    });

    it('should return null for missing fields', () => {
      expect(parser.parseString('placeOfBirth')).toBeNull();
    });
  });

  describe('parseDate', () => {
    it('should parse date of birth correctly', () => {
      const dob = parser.parseDate('dateOfBirth');
      expect(dob).not.toBeNull();
      expect(dob!.getFullYear()).toBe(1986);
      expect(dob!.getMonth()).toBe(9); // October = 9 (zero-indexed)
      expect(dob!.getDate()).toBe(23);
    });

    it('should parse expiration date correctly', () => {
      const exp = parser.parseDate('expirationDate');
      expect(exp).not.toBeNull();
      expect(exp!.getFullYear()).toBe(2031);
    });

    it('should parse issue date correctly', () => {
      const issue = parser.parseDate('issueDate');
      expect(issue).not.toBeNull();
      expect(issue!.getFullYear()).toBe(2023);
    });

    it('should return null for missing date fields', () => {
      const emptyParser = new FieldParser('no date here', fieldMapper);
      expect(emptyParser.parseDate('dateOfBirth')).toBeNull();
    });
  });

  describe('parseDouble', () => {
    it('should parse numeric values', () => {
      const result = parser.parseDouble('height');
      expect(result).toBe(77);
    });

    it('should return null for missing fields', () => {
      const emptyParser = new FieldParser('no data', fieldMapper);
      expect(emptyParser.parseDouble('height')).toBeNull();
    });
  });

  describe('parseGender', () => {
    it('should parse male gender (1)', () => {
      expect(parser.parseGender()).toBe('Male');
    });

    it('should parse female gender (2)', () => {
      const femaleData = 'DBC2\n';
      const femaleParser = new FieldParser(femaleData, fieldMapper);
      expect(femaleParser.parseGender()).toBe('Female');
    });

    it('should return Other for unknown gender codes', () => {
      const unknownData = 'DBC9\n';
      const unknownParser = new FieldParser(unknownData, fieldMapper);
      expect(unknownParser.parseGender()).toBe('Other');
    });
  });

  describe('parseEyeColor', () => {
    it('should parse hazel eye color', () => {
      expect(parser.parseEyeColor()).toBe('Hazel');
    });

    it('should parse all eye color codes', () => {
      const codes: [string, string][] = [
        ['BLK', 'Black'], ['BLU', 'Blue'], ['BRO', 'Brown'],
        ['GRY', 'Gray'], ['GRN', 'Green'], ['HAZ', 'Hazel'],
        ['MAR', 'Maroon'], ['PNK', 'Pink'], ['DIC', 'Dichromatic'],
      ];
      for (const [code, expected] of codes) {
        const p = new FieldParser(`DAY${code}\n`, fieldMapper);
        expect(p.parseEyeColor()).toBe(expected);
      }
    });

    it('should return Unknown for unrecognized eye color', () => {
      const p = new FieldParser('DAYXYZ\n', fieldMapper);
      expect(p.parseEyeColor()).toBe('Unknown');
    });
  });

  describe('parseHairColor', () => {
    it('should parse brown hair color', () => {
      expect(parser.parseHairColor()).toBe('Brown');
    });

    it('should parse all hair color codes', () => {
      const codes: [string, string][] = [
        ['BAL', 'Bald'], ['BLK', 'Black'], ['BLN', 'Blond'],
        ['BRO', 'Brown'], ['GRY', 'Grey'], ['RED', 'Red'],
        ['SDY', 'Sandy'], ['WHI', 'White'],
      ];
      for (const [code, expected] of codes) {
        const p = new FieldParser(`DAZ${code}\n`, fieldMapper);
        expect(p.parseHairColor()).toBe(expected);
      }
    });

    it('should return Unknown for unrecognized hair color', () => {
      const p = new FieldParser('DAZXYZ\n', fieldMapper);
      expect(p.parseHairColor()).toBe('Unknown');
    });
  });

  describe('parseCountry', () => {
    it('should parse USA', () => {
      expect(parser.parseCountry()).toBe('United States');
    });

    it('should parse CAN', () => {
      const canParser = new FieldParser('DCGCAN\n', fieldMapper);
      expect(canParser.parseCountry()).toBe('Canada');
    });

    it('should return Unknown for unrecognized country', () => {
      const unknownParser = new FieldParser('DCGMEX\n', fieldMapper);
      expect(unknownParser.parseCountry()).toBe('Unknown');
    });
  });

  describe('parseTruncationStatus', () => {
    it('should parse Truncated status', () => {
      const p = new FieldParser('DDFT\n', fieldMapper);
      expect(p.parseTruncationStatus('firstNameTruncation')).toBe('Truncated');
    });

    it('should parse None status', () => {
      const p = new FieldParser('DDFN\n', fieldMapper);
      expect(p.parseTruncationStatus('firstNameTruncation')).toBe('None');
    });

    it('should return Unknown for unrecognized truncation', () => {
      const p = new FieldParser('DDFX\n', fieldMapper);
      expect(p.parseTruncationStatus('firstNameTruncation')).toBe('Unknown');
    });
  });

  describe('parseNameSuffix', () => {
    it('should parse JR suffix', () => {
      const p = new FieldParser('DCUJR\n', fieldMapper);
      expect(p.parseNameSuffix()).toBe('Junior');
    });

    it('should parse SR suffix', () => {
      const p = new FieldParser('DCUSR\n', fieldMapper);
      expect(p.parseNameSuffix()).toBe('Senior');
    });

    it('should parse numeric suffixes', () => {
      const suffixes: [string, string][] = [
        ['1ST', 'First'], ['2ND', 'Second'], ['3RD', 'Third'],
        ['4TH', 'Fourth'], ['5TH', 'Fifth'], ['6TH', 'Sixth'],
        ['7TH', 'Seventh'], ['8TH', 'Eighth'], ['9TH', 'Ninth'],
      ];
      for (const [code, expected] of suffixes) {
        const p = new FieldParser(`DCU${code}\n`, fieldMapper);
        expect(p.parseNameSuffix()).toBe(expected);
      }
    });

    it('should parse roman numeral suffixes', () => {
      const suffixes: [string, string][] = [
        ['I', 'First'], ['II', 'Second'], ['III', 'Third'],
        ['IV', 'Fourth'], ['V', 'Fifth'], ['VI', 'Sixth'],
        ['VII', 'Seventh'], ['VIII', 'Eighth'], ['IX', 'Ninth'],
      ];
      for (const [code, expected] of suffixes) {
        const p = new FieldParser(`DCU${code}\n`, fieldMapper);
        expect(p.parseNameSuffix()).toBe(expected);
      }
    });

    it('should return Unknown for unrecognized suffix', () => {
      const p = new FieldParser('DCUXYZ\n', fieldMapper);
      expect(p.parseNameSuffix()).toBe('Unknown');
    });
  });

  describe('parseHeight', () => {
    it('should parse height in inches', () => {
      expect(parser.parseHeight()).toBe(77);
    });

    it('should convert height from centimeters', () => {
      const cmParser = new FieldParser('DAU180 cm\n', fieldMapper);
      const height = cmParser.parseHeight();
      expect(height).toBe(71); // 180 * 0.393701 ≈ 70.87 → 71
    });

    it('should return null for missing height', () => {
      const emptyParser = new FieldParser('no height', fieldMapper);
      expect(emptyParser.parseHeight()).toBeNull();
    });
  });

  describe('parseIsExpired', () => {
    it('should return true for expired license', () => {
      const expiredData = 'DBA01012000\n';
      const expParser = new FieldParser(expiredData, fieldMapper);
      expect(expParser.parseIsExpired()).toBe(true);
    });

    it('should return false for non-expired license', () => {
      expect(parser.parseIsExpired()).toBe(false);
    });
  });
});
