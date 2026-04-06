import { VersionTwelveFieldParser } from '../src/mappers/v12/versionTwelveFieldParser';

describe('VersionTwelveFieldParser', () => {
  // v12 barcode: has DDM/DDN/DDO/DDP, removes DBN/DBG/DBS from mapper
  const data = `
@
ANSI 636015120002DL00410280ZT01211007DLDCAC
DCBNONE
DCDNONE
DBA10232031
DCSJOHNSON
DDEN
DACROBERT
DDFN
DADJAMES
DDGN
DBD03152025
DBB06151985
DBC1
DAYBLU
DAU072 in
DAG789 PINE ST
DAIHOUSTON
DAJTX
DAK77001
DAQ88834567
DCF00998877665544332211
DCGUSA
DAZBRN
DCK20250301122334
DDAF
DDB01202024
DAW200
DDM1
DDN1
DDO1
DDP1`;
  const parser = new VersionTwelveFieldParser(data);

  it('should parse first name correctly', () => {
    expect(parser.parseFirstName()).toBe('ROBERT');
  });

  it('should parse last name correctly', () => {
    expect(parser.parseLastName()).toBe('JOHNSON');
  });

  it('should parse CDL indicator', () => {
    expect(parser.parseString('cdlIndicator')).toBe('1');
  });

  it('should parse non-domiciled indicator', () => {
    expect(parser.parseString('nonDomiciledIndicator')).toBe('1');
  });

  it('should parse enhanced credential indicator', () => {
    expect(parser.parseString('enhancedCredentialIndicator')).toBe('1');
  });

  it('should parse permit indicator', () => {
    expect(parser.parseString('permitIndicator')).toBe('1');
  });

  it('should parse shorter postal code (variable length)', () => {
    expect(parser.parseString('postalCode')).toBe('77001');
  });

  it('should return null for removed alias fields', () => {
    expect(parser.parseString('lastNameAlias')).toBeNull();
    expect(parser.parseString('firstNameAlias')).toBeNull();
    expect(parser.parseString('suffixAlias')).toBeNull();
  });

  it('should parse country correctly', () => {
    expect(parser.parseCountry()).toBe('United States');
  });

  // Test without the new optional fields
  describe('without optional CDS 2025 fields', () => {
    const minimalData = `
@
ANSI 636015120002DL00410280ZT01211007DLDCAC
DCBNONE
DBA10232031
DCSDOE
DACJANE
DBD03152025
DBB01011995
DBC2
DAU065 in
DAG123 MAIN ST
DAIDALLAS
DAJTX
DAK75201
DAQ11122233
DCF00112233445566778899
DCGUSA
DAW130`;
    const minParser = new VersionTwelveFieldParser(minimalData);

    it('should return null for absent optional CDS 2025 fields', () => {
      expect(minParser.parseString('cdlIndicator')).toBeNull();
      expect(minParser.parseString('nonDomiciledIndicator')).toBeNull();
      expect(minParser.parseString('enhancedCredentialIndicator')).toBeNull();
      expect(minParser.parseString('permitIndicator')).toBeNull();
    });

    it('should still parse standard fields', () => {
      expect(minParser.parseFirstName()).toBe('JANE');
      expect(minParser.parseLastName()).toBe('DOE');
    });
  });
});
