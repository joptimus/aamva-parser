import { VersionThreeFieldParser } from '../src/mappers/v3/versionThreeFieldParser';

describe('VersionThreeFieldParser', () => {
  const data = `@
  ANSI 636031030001DL00300210DLDAQL532143890998309
  DCADM
  DCSLEWIS
  DCTSAMUEL
  DCUnone
  DAG1121 W YUKON CT
  DAH
  DAIWAUKESHA
  DAJWI
  DAK53219000000
  DCG
  DBC1
  DAU071 IN
  DCE8
  DAYGRN
  DBA10232013
  DBB02131986
  DBD07222008
  DCBnone
  DCDnone
  DCHNONE
  DCFOTJAR22082722193452112213`;

  const parser = new VersionThreeFieldParser(data);

  it('should parse first name correctly', () => {
    expect(parser.parseFirstName()).toBe('SAMUEL');
  });

  it('should parse last name correctly', () => {
    expect(parser.parseLastName()).toBe('LEWIS');
  });

  it('should parse city correctly', () => {
    expect(parser.parseString('city')).toBe('WAUKESHA');
  });

  it('should parse state correctly', () => {
    expect(parser.parseString('state')).toBe('WI');
  });

  it('should parse street address correctly', () => {
    expect(parser.parseString('streetAddress')).toBe('1121 W YUKON CT');
  });

  it('should parse postal code correctly', () => {
    expect(parser.parseString('postalCode')).toBe('53219000000');
  });

  it('should parse date of birth correctly', () => {
    const dob = parser.parseDateOfBirth();
    expect(dob).not.toBeNull();
    expect(dob!.getFullYear()).toBe(1986);
    expect(dob!.getMonth()).toBe(1); // February
    expect(dob!.getDate()).toBe(13);
  });

  it('should parse gender correctly', () => {
    expect(parser.parseGender()).toBe('Male');
  });

  it('should parse eye color correctly', () => {
    expect(parser.parseEyeColor()).toBe('Green');
  });

  it('should parse height correctly', () => {
    expect(parser.parseHeight()).toBe(71);
  });

  it('should parse expiration date correctly', () => {
    const exp = parser.parseExpirationDate();
    expect(exp).not.toBeNull();
    expect(exp!.getFullYear()).toBe(2013);
  });

  it('should parse issue date correctly', () => {
    const issue = parser.parseIssueDate();
    expect(issue).not.toBeNull();
    expect(issue!.getFullYear()).toBe(2008);
  });

  it('should parse document ID correctly', () => {
    expect(parser.parseString('documentId')).toBe('OTJAR22082722193452112213');
  });

  it('should parse drivers license ID correctly', () => {
    expect(parser.parseString('driversLicenseId')).toBe('L532143890998309');
  });
});
