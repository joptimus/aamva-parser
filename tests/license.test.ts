import { License } from '../src/models/license';
import { Gender, EyeColor, IssuingCountry, Truncation, HairColor, NameSuffix } from '../src/enums';

describe('License', () => {
  it('should create an empty license', () => {
    const license = new License();

    expect(license.firstName).toBeNull();
    expect(license.lastName).toBeNull();
    expect(license.middleName).toBeNull();
    expect(license.expirationDate).toBeNull();
    expect(license.issueDate).toBeNull();
    expect(license.dateOfBirth).toBeNull();
    expect(license.gender).toBe(Gender.Unknown);
    expect(license.eyeColor).toBe(EyeColor.Unknown);
    expect(license.height).toBeNull();
    expect(license.streetAddress).toBeNull();
    expect(license.city).toBeNull();
    expect(license.state).toBeNull();
    expect(license.postalCode).toBeNull();
    expect(license.customerId).toBeNull();
    expect(license.documentId).toBeNull();
    expect(license.country).toBe(IssuingCountry.Unknown);
    expect(license.middleNameTruncation).toBe(Truncation.None);
    expect(license.firstNameTruncation).toBe(Truncation.None);
    expect(license.lastNameTruncation).toBe(Truncation.None);
    expect(license.streetAddressSupplement).toBeNull();
    expect(license.hairColor).toBe(HairColor.Unknown);
    expect(license.placeOfBirth).toBeNull();
    expect(license.auditInformation).toBeNull();
    expect(license.inventoryControlNumber).toBeNull();
    expect(license.lastNameAlias).toBeNull();
    expect(license.firstNameAlias).toBeNull();
    expect(license.suffixAlias).toBeNull();
    expect(license.suffix).toBe(NameSuffix.Unknown);
    expect(license.version).toBeNull();
    expect(license.pdf417).toBeNull();
  });

  it('should determine if the license is expired', () => {
    const license = new License({ expirationDate: new Date('2000-01-01') });
    expect(license.isExpired()).toBe(true);

    const validLicense = new License({ expirationDate: new Date('2099-01-01') });
    expect(validLicense.isExpired()).toBe(false);
  });

  it('should determine if the license has been issued', () => {
    const license = new License({ issueDate: new Date('2000-01-01') });
    expect(license.hasBeenIssued()).toBe(true);

    const notIssuedLicense = new License({ issueDate: new Date('2099-01-01') });
    expect(notIssuedLicense.hasBeenIssued()).toBe(false);
  });

  it('should determine if the license is acceptable', () => {
    const acceptableLicense = new License({
      expirationDate: new Date('2099-01-01'),
      issueDate: new Date('2000-01-01'),
      lastName: 'Doe',
      firstName: 'John',
      middleName: 'A',
      dateOfBirth: new Date('1980-01-01'),
      height: 180,
      streetAddress: '123 Main St',
      city: 'Springfield',
      state: 'IL',
      postalCode: '62704',
      documentId: '123456789'
    });

    expect(acceptableLicense.isAcceptable()).toBe(true);

    const incompleteLicense = new License();
    expect(incompleteLicense.isAcceptable()).toBe(false);
  });
});
