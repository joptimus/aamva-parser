import { VersionTwoFieldParser } from '../src/mappers/v2/versionTwoFieldParser';

describe('VersionTwoFieldParser', () => {
  const data = `@

  ANSI 636026020102DL00410288ZA03290015DLDAQD12345678
  DCSPUBLIC
  DDEN
  DCTJOHN
  DDFN
  DADQUINCY
  DDGN
  DCAD
  DCBNONE
  DCDNONE
  DBD08242015
  DBB01311970
  DBA01312035
  DBC1
  DAU069 in
  DAYGRN
  DAG789 E OAK ST
  DAIANYTOWN
  DAJCA
  DAK902230000
  DCF83D9BN217QO983B1
  DCGUSA
  DAW180
  DAZBRO
  DCK12345678900000000000
  DDB02142014
  DDK1
  ZAZAAN
  ZAB
  ZAC`;
  const parser = new VersionTwoFieldParser(data);

  it('should parse first name correctly', () => {
    expect(parser.parseFirstName()).toBe('JOHN');
  });

  it('should parse last name correctly', () => {
    expect(parser.parseLastName()).toBe('PUBLIC');
  });

  it('should parse middle name correctly', () => {
    expect(parser.parseMiddleName()).toBe('QUINCY');
  });

  it('should parse date of birth correctly', () => {
    const dob = parser.parseDateOfBirth();
    expect(dob).not.toBeNull();
    expect(dob!.getFullYear()).toBe(1970);
  });

  it('should parse gender correctly', () => {
    expect(parser.parseGender()).toBe('Male');
  });

  it('should parse eye color correctly', () => {
    expect(parser.parseEyeColor()).toBe('Green');
  });

  it('should parse hair color correctly', () => {
    expect(parser.parseHairColor()).toBe('Brown');
  });

  it('should parse height correctly', () => {
    expect(parser.parseHeight()).toBe(69);
  });

  it('should parse city correctly', () => {
    expect(parser.parseString('city')).toBe('ANYTOWN');
  });

  it('should parse state correctly', () => {
    expect(parser.parseString('state')).toBe('CA');
  });

  it('should parse weight correctly', () => {
    expect(parser.parseString('weight')).toBe('180');
  });

  it('should parse country correctly', () => {
    expect(parser.parseCountry()).toBe('United States');
  });

  it('should parse document ID correctly', () => {
    expect(parser.parseString('documentId')).toBe('83D9BN217QO983B1');
  });

  it('should parse expiration date correctly', () => {
    const exp = parser.parseExpirationDate();
    expect(exp).not.toBeNull();
    expect(exp!.getFullYear()).toBe(2035);
  });
});
