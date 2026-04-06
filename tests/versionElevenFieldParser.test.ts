import { VersionElevenFieldParser } from '../src/mappers/v11/versionElevenFieldParser';

describe('VersionElevenFieldParser', () => {
  const data = `
@
ANSI 636015110002DL00410280ZT01211007DLDCAC
DCBNONE
DCDNONE
DBA10232031
DCSSMITH
DDEN
DACJANE
DDFN
DADMARIE
DDGN
DBD11062023
DBB10231990
DBC2
DAYBRO
DAU065 in
DAG456 OAK AVE
DAIANYTOWN
DAJTX
DAK761770000
DAQ55512345
DCF00121300011116256231
DCGUSA
DAZBLN
DCK10022062633
DDAF
DDB07112021
DAW140`;
  const parser = new VersionElevenFieldParser(data);

  it('should parse first name correctly', () => {
    expect(parser.parseFirstName()).toBe('JANE');
  });

  it('should parse last name correctly', () => {
    expect(parser.parseLastName()).toBe('SMITH');
  });

  it('should parse middle name correctly', () => {
    expect(parser.parseMiddleName()).toBe('MARIE');
  });

  it('should parse date of birth correctly', () => {
    const dob = parser.parseDateOfBirth();
    expect(dob).not.toBeNull();
    expect(dob!.getFullYear()).toBe(1990);
  });

  it('should parse gender correctly', () => {
    expect(parser.parseGender()).toBe('Female');
  });

  it('should parse city correctly', () => {
    expect(parser.parseString('city')).toBe('ANYTOWN');
  });

  it('should parse state correctly', () => {
    expect(parser.parseString('state')).toBe('TX');
  });
});
