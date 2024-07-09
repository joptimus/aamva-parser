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
    const result = parser.parseFirstName();
    expect(result).toBe('ANDREW'); // Adjust based on your logic
  });

  // Add more tests for other methods as needed
});
