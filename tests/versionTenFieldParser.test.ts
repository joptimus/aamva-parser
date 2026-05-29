import { VersionTenFieldParser } from '../src/mappers/v10/versionTenFieldParser';

describe('VersionTenFieldParser', () => {
  const data = `
@
ANSI 636015100002DL00410280ZT01211007DLDCAC
DCBNONE
DCDNONE
DBA10232031
DCSANDERSON
DDEN
DACMICHAEL
DDFN
DADLEE
DDGN
DBD11062023
DBB05151988
DBC1
DAYBRO
DAU073 in
DAG4521 SUNSET BLVD
DAIAUSTIN
DAJTX
DAK787010000
DAQ33456789
DCF00223344556677889900
DCGUSA
DAZBLN
DCK10033062644
DDAF
DDB07162021
DAW195`;
  const parser = new VersionTenFieldParser(data);

  it('should parse first name correctly', () => {
    expect(parser.parseFirstName()).toBe('MICHAEL');
  });

  it('should parse last name correctly', () => {
    expect(parser.parseLastName()).toBe('ANDERSON');
  });

  it('should parse middle name correctly', () => {
    expect(parser.parseMiddleName()).toBe('LEE');
  });

  it('should parse date of birth correctly', () => {
    const dob = parser.parseDateOfBirth();
    expect(dob).not.toBeNull();
    expect(dob!.getFullYear()).toBe(1988);
    expect(dob!.getMonth()).toBe(4); // May = 4 (zero-indexed)
    expect(dob!.getDate()).toBe(15);
  });

  it('should parse gender correctly', () => {
    expect(parser.parseGender()).toBe('Male');
  });

  it('should parse eye color correctly', () => {
    expect(parser.parseEyeColor()).toBe('Brown');
  });

  it('should parse hair color correctly', () => {
    expect(parser.parseHairColor()).toBe('Blond');
  });

  it('should parse height correctly', () => {
    expect(parser.parseHeight()).toBe(73);
  });

  it('should parse city correctly', () => {
    expect(parser.parseString('city')).toBe('AUSTIN');
  });

  it('should parse state correctly', () => {
    expect(parser.parseString('state')).toBe('TX');
  });

  it('should parse postal code correctly', () => {
    expect(parser.parseString('postalCode')).toBe('787010000');
  });

  it('should parse street address correctly', () => {
    expect(parser.parseString('streetAddress')).toBe('4521 SUNSET BLVD');
  });

  it('should parse weight correctly', () => {
    expect(parser.parseString('weight')).toBe('195');
  });

  it('should parse country correctly', () => {
    expect(parser.parseCountry()).toBe('United States');
  });

  it('should parse document ID correctly', () => {
    expect(parser.parseString('documentId')).toBe('00223344556677889900');
  });

  it('should parse drivers license ID correctly', () => {
    expect(parser.parseString('driversLicenseId')).toBe('33456789');
  });

  it('should parse expiration date correctly', () => {
    const exp = parser.parseExpirationDate();
    expect(exp).not.toBeNull();
    expect(exp!.getFullYear()).toBe(2031);
  });

  it('should parse issue date correctly', () => {
    const issue = parser.parseIssueDate();
    expect(issue).not.toBeNull();
    expect(issue!.getFullYear()).toBe(2023);
  });
});
