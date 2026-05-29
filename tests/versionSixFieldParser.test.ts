import { VersionSixFieldParser } from '../src/mappers/v6/versionSixFieldParser';

describe('VersionSixFieldParser', () => {
  const data = `
@
ANSI 636015060002DL00410280ZT01211007DLDCAC
DCBNONE
DCDNONE
DBA10232031
DCSSMITH
DDEN
DACANDREW
DDFN
DADTHOMAS
DDGN
DBD11062023
DBB10231946
DBC1
DAYHAZ
DAU087 in
DAG8130 SKY RIDGE POND ST
DAIANYTOWN
DAJTX
DAK761770000
DAQ42145201
DCF00121300011116256231
DCGUSA
DAZBRO
DCK10022062633
DCLWO
DDAF
DDB07112021
DAW350
ZTZTAN`;

  const parser = new VersionSixFieldParser(data);

  it('should parse first name correctly', () => {
    expect(parser.parseFirstName()).toBe('ANDREW');
  });

  it('should parse last name correctly', () => {
    expect(parser.parseLastName()).toBe('SMITH');
  });

  it('should parse middle name correctly', () => {
    expect(parser.parseMiddleName()).toBe('THOMAS');
  });

  it('should parse date of birth correctly', () => {
    const dob = parser.parseDateOfBirth();
    expect(dob).not.toBeNull();
    expect(dob!.getFullYear()).toBe(1946);
  });

  it('should parse gender correctly', () => {
    expect(parser.parseGender()).toBe('Male');
  });

  it('should parse eye color correctly', () => {
    expect(parser.parseEyeColor()).toBe('Hazel');
  });

  it('should parse hair color correctly', () => {
    expect(parser.parseHairColor()).toBe('Brown');
  });

  it('should parse height correctly', () => {
    expect(parser.parseHeight()).toBe(87);
  });

  it('should parse city correctly', () => {
    expect(parser.parseString('city')).toBe('ANYTOWN');
  });

  it('should parse state correctly', () => {
    expect(parser.parseString('state')).toBe('TX');
  });

  it('should parse weight correctly', () => {
    expect(parser.parseString('weight')).toBe('350');
  });

  it('should parse country correctly', () => {
    expect(parser.parseCountry()).toBe('United States');
  });

  it('should parse document ID correctly', () => {
    expect(parser.parseString('documentId')).toBe('00121300011116256231');
  });

  it('should parse drivers license ID correctly', () => {
    expect(parser.parseString('driversLicenseId')).toBe('42145201');
  });

  it('should parse expiration date correctly', () => {
    const exp = parser.parseExpirationDate();
    expect(exp).not.toBeNull();
    expect(exp!.getFullYear()).toBe(2031);
  });
});
