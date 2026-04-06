import {
  parse, getVersion, isExpired,
  Parse, GetVersion, IsExpired,
  getAge, isUnder21, isUnder18,
  isAcceptable, getFullName, getState, isCDL
} from '../src/index';

const validBarcode = `
@
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

describe('camelCase API aliases', () => {
  it('parse() should work identically to Parse()', () => {
    const a = Parse(validBarcode);
    const b = parse(validBarcode);
    expect(b.firstName).toBe(a.firstName);
    expect(b.lastName).toBe(a.lastName);
    expect(b.version).toBe(a.version);
  });

  it('getVersion() should work identically to GetVersion()', () => {
    expect(getVersion(validBarcode)).toBe(GetVersion(validBarcode));
  });

  it('isExpired() should work identically to IsExpired()', () => {
    expect(isExpired(validBarcode)).toBe(IsExpired(validBarcode));
  });
});

describe('getAge', () => {
  it('should return age in years for a valid barcode', () => {
    const age = getAge(validBarcode);
    expect(age).not.toBeNull();
    expect(age).toBeGreaterThan(50); // DOB is 01/31/1970
  });

  it('should return null for barcode with no DOB', () => {
    const noDobBarcode = `
@
ANSI 636026080102DL00410288ZA03290015DLDAQD12345678
DCSPUBLIC
DACJOHN`;
    expect(getAge(noDobBarcode)).toBeNull();
  });
});

describe('isUnder21', () => {
  it('should return false for someone born in 1970', () => {
    expect(isUnder21(validBarcode)).toBe(false);
  });
});

describe('isUnder18', () => {
  it('should return false for someone born in 1970', () => {
    expect(isUnder18(validBarcode)).toBe(false);
  });
});

describe('isAcceptable', () => {
  it('should return true for a complete valid barcode', () => {
    expect(isAcceptable(validBarcode)).toBe(true);
  });
});

describe('getFullName', () => {
  it('should return formatted full name', () => {
    const name = getFullName(validBarcode);
    expect(name).toBe('JOHN QUINCY PUBLIC');
  });

  it('should handle missing middle name', () => {
    const noMiddleBarcode = `
@
ANSI 636026080102DL00410288ZA03290015DLDAQD12345678
DCSPUBLIC
DACJOHN
DBD08242015
DBB01311970
DBA01312035
DBC1
DAU069 in
DAG789 E OAK ST
DAIANYTOWN
DAJCA
DAK902230000
DCF83D9BN217QO983B1
DCGUSA`;
    const name = getFullName(noMiddleBarcode);
    expect(name).toBe('JOHN PUBLIC');
  });

  it('should return null when no name fields present', () => {
    const emptyBarcode = `
@
ANSI 636026080102DL00410288ZA03290015DL`;
    expect(getFullName(emptyBarcode)).toBeNull();
  });
});

describe('getState', () => {
  it('should return the state code', () => {
    expect(getState(validBarcode)).toBe('CA');
  });
});

describe('isCDL', () => {
  it('should return false for a non-CDL license', () => {
    expect(isCDL(validBarcode)).toBe(false);
  });

  it('should return true for a v12 CDL barcode', () => {
    const cdlBarcode = `
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
DAW200
DDM1`;
    expect(isCDL(cdlBarcode)).toBe(true);
  });
});
