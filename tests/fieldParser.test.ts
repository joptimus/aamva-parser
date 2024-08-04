import { FieldParser } from '../src/mappers/fieldParser';
import { FieldMapper } from '../src/mappers/fieldMapping';

describe('FieldParser', () => {
  const data2 = `@\n\u001e\rANSI 636015090002DL00410280ZT03210007DLDCAC\nDCBNONE\nDCDNONE\nDBA10232031\nDCSLEWANDOWSKI\nDDEN\nDACJAMES\nDDFN\nDADCLAIR\nDDGN\nDBD11062023\nDBB10231986\nDBC1\nDAYHAZ\nDAU077 in\nDAG8830 HIDDEN POND ST\nDAINORTHLAKE\nDAJTX\nDAK762470000\nDAQ42145201\nDCF00121301114026256231\nDCGUSA\nDAZBRO\nDCK10022062600\nDCLWO\nDDAF\nDDB07162021\nDAW350\n\rZTZTAN\r`;
//   const data = `
// @
// ANSI 636015090002DL00410280ZT01211007DLDCAC
// DCBNONE
// DCDNONE
// DBA10232031
// DCSSMITH
// DDEN
// DACANDREW
// DDFN
// DADTHOMAS
// DDGN
// DBD11062023
// DBB10231946
// DBC1
// DAYHAZ
// DAU087 in
// DAG8130 SKY RIDGE POND ST
// DAIANYTOWN
// DAJTX
// DAK761770000
// DAQ42145201
// DCF00121300011116256231
// DCGUSA
// DAZBRO
// DCK10022062633
// DCLWO
// DDAF
// DDB07112021
// DAW350
// ZTZTAN`;
  const fieldMapper = new FieldMapper();
  const parser = new FieldParser(data2, fieldMapper);

  it('should parse strings correctly', () => {
    const result = parser.parseString('state');
    console.warn('Field Parser test', result);
    expect(result).toBe('TX'); // Adjust based on your logic
  });


  // Add more tests for other methods
});
