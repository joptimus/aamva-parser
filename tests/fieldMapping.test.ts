import { FieldMapper } from '../src/mappers/fieldMapping';

describe('FieldMapper', () => {
  const fieldMapper = new FieldMapper();

  it('should map firstName to DAC', () => {
    expect(fieldMapper.fieldFor('firstName')).toBe('DAC');
  });

  it('should map lastName to DCS', () => {
    expect(fieldMapper.fieldFor('lastName')).toBe('DCS');
  });

  it('should map middleName to DAD', () => {
    expect(fieldMapper.fieldFor('middleName')).toBe('DAD');
  });

  it('should map expirationDate to DBA', () => {
    expect(fieldMapper.fieldFor('expirationDate')).toBe('DBA');
  });

  it('should map issueDate to DBD', () => {
    expect(fieldMapper.fieldFor('issueDate')).toBe('DBD');
  });

  it('should map dateOfBirth to DBB', () => {
    expect(fieldMapper.fieldFor('dateOfBirth')).toBe('DBB');
  });

  it('should map gender to DBC', () => {
    expect(fieldMapper.fieldFor('gender')).toBe('DBC');
  });

  it('should map eyeColor to DAY', () => {
    expect(fieldMapper.fieldFor('eyeColor')).toBe('DAY');
  });

  it('should map height to DAU', () => {
    expect(fieldMapper.fieldFor('height')).toBe('DAU');
  });

  it('should map streetAddress to DAG', () => {
    expect(fieldMapper.fieldFor('streetAddress')).toBe('DAG');
  });

  it('should map city to DAI', () => {
    expect(fieldMapper.fieldFor('city')).toBe('DAI');
  });

  it('should map state to DAJ', () => {
    expect(fieldMapper.fieldFor('state')).toBe('DAJ');
  });

  it('should map postalCode to DAK', () => {
    expect(fieldMapper.fieldFor('postalCode')).toBe('DAK');
  });

  it('should map driversLicenseId to DAQ', () => {
    expect(fieldMapper.fieldFor('driversLicenseId')).toBe('DAQ');
  });

  it('should map documentId to DCF', () => {
    expect(fieldMapper.fieldFor('documentId')).toBe('DCF');
  });

  it('should map country to DCG', () => {
    expect(fieldMapper.fieldFor('country')).toBe('DCG');
  });

  it('should map middleNameTruncation to DDG', () => {
    expect(fieldMapper.fieldFor('middleNameTruncation')).toBe('DDG');
  });

  it('should map firstNameTruncation to DDF', () => {
    expect(fieldMapper.fieldFor('firstNameTruncation')).toBe('DDF');
  });

  it('should map lastNameTruncation to DDE', () => {
    expect(fieldMapper.fieldFor('lastNameTruncation')).toBe('DDE');
  });

  it('should map streetAddressSupplement to DAH', () => {
    expect(fieldMapper.fieldFor('streetAddressSupplement')).toBe('DAH');
  });

  it('should map hairColor to DAZ', () => {
    expect(fieldMapper.fieldFor('hairColor')).toBe('DAZ');
  });

  it('should map placeOfBirth to DCI', () => {
    expect(fieldMapper.fieldFor('placeOfBirth')).toBe('DCI');
  });

  it('should map auditInformation to DCJ', () => {
    expect(fieldMapper.fieldFor('auditInformation')).toBe('DCJ');
  });

  it('should map inventoryControlNumber to DCK', () => {
    expect(fieldMapper.fieldFor('inventoryControlNumber')).toBe('DCK');
  });

  it('should map lastNameAlias to DBN', () => {
    expect(fieldMapper.fieldFor('lastNameAlias')).toBe('DBN');
  });

  it('should map firstNameAlias to DBG', () => {
    expect(fieldMapper.fieldFor('firstNameAlias')).toBe('DBG');
  });

  it('should map suffixAlias to DBS', () => {
    expect(fieldMapper.fieldFor('suffixAlias')).toBe('DBS');
  });

  it('should map suffix to DCU', () => {
    expect(fieldMapper.fieldFor('suffix')).toBe('DCU');
  });

  it('should map weight to DAW', () => {
    expect(fieldMapper.fieldFor('weight')).toBe('DAW');
  });

  it('should return empty string for unknown fields', () => {
    expect(fieldMapper.fieldFor('nonExistentField')).toBe('');
  });
});
