import { VersionSevenFieldParser } from '../src/mappers/v7/versionSevenFieldParser';

describe('VersionSevenFieldParser', () => {
  const data = `@

  ANSI 636026080102DL00410288ZA03290015DLDAQD12345678
  DCSPUBLIC
  DDEN
  DACJOHN
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
  const parser = new VersionSevenFieldParser(data);

  it('should parse first name correctly', () => {
    const result = parser.parseFirstName();
    expect(result).toBe('JOHN');
  });
});
