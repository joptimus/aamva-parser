import { Parse, GetVersion } from '../src/index';

describe('Parser v11 and v12 integration', () => {
  const v11Data = `
@
ANSI 636015110002DL00410280ZT01211007DLDCAC
DCBNONE
DBA10232031
DCSSMITH
DACJANE
DADMARIE
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
DAW140`;

  const v12Data = `
@
ANSI 636015120002DL00410280ZT01211007DLDCAC
DCBNONE
DBA10232031
DCSJOHNSON
DACROBERT
DADJAMES
DBD03152025
DBB06151985
DBC1
DAYBLU
DAU072 in
DAG789 PINE ST
DAIHOUSTON
DAJTX
DAK77001
DAQ88834567
DCF00998877665544332211
DCGUSA
DAZBRN
DAW200
DDM1
DDO1`;

  it('should detect version 11', () => {
    expect(GetVersion(v11Data)).toBe('11');
  });

  it('should parse v11 license', () => {
    const license = Parse(v11Data);
    expect(license.version).toBe('11');
    expect(license.firstName).toBe('JANE');
    expect(license.lastName).toBe('SMITH');
  });

  it('should detect version 12', () => {
    expect(GetVersion(v12Data)).toBe('12');
  });

  it('should parse v12 license with new fields', () => {
    const license = Parse(v12Data);
    expect(license.version).toBe('12');
    expect(license.firstName).toBe('ROBERT');
    expect(license.lastName).toBe('JOHNSON');
    expect(license.cdlIndicator).toBe('1');
    expect(license.enhancedCredentialIndicator).toBe('1');
    expect(license.nonDomiciledIndicator).toBeNull();
    expect(license.permitIndicator).toBeNull();
  });

  it('should parse v12 shorter postal code', () => {
    const license = Parse(v12Data);
    expect(license.postalCode).toBe('77001');
  });
});
