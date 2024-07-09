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
    const result = parser.parseFirstName();
    expect(result).toBe('SAMUEL'); // Adjust based on your logic
  });

  it('should parse last name correctly', () => {
    const result = parser.parseLastName();
    expect(result).toBe('LEWIS'); // Adjust based on your logic
  });

  it('should parse CITY name correctly', () => {
    const result = parser.parseString("city");
    expect(result).toBe('WAUKESHA'); // Adjust based on your logic
  });

  it('should return the correct date format', () => {
    const dateFormat = parser.getDateFormat();
    expect(dateFormat).toBe('yyyyMMdd');
  });

  // Add more tests for other methods as needed
});
