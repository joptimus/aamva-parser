import { FieldParser } from '../src/mappers/fieldParser';
import { FieldMapper } from '../src/mappers/fieldMapping';

describe('FieldParser', () => {
  const data = `
@
ANSI 636015090002DL00410280ZT01211007DLDCAC
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
  const fieldMapper = new FieldMapper();
  const parser = new FieldParser(data, fieldMapper);

  it('should parse strings correctly', () => {
    const result = parser.parseString('state');
    expect(result).toBe('TX'); // Adjust based on your logic
  });


  // Add more tests for other methods
});
