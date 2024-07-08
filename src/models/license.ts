import { ParsedLicense } from '../parsedLicense';
import { Gender, EyeColor, IssuingCountry, Truncation, HairColor, NameSuffix } from '../enums';

export class License implements ParsedLicense {
  firstName: string | null = null;
  lastName: string | null = null;
  middleName: string | null = null;
  expirationDate: Date | null = null;
  issueDate: Date | null = null;
  dateOfBirth: Date | null = null;
  gender: Gender = Gender.Unknown;
  eyeColor: EyeColor = EyeColor.Unknown;
  height: number | null = null;
  streetAddress: string | null = null;
  city: string | null = null;
  state: string | null = null;
  postalCode: string | null = null;
  customerId: string | null = null;
  documentId: string | null = null;
  country: IssuingCountry = IssuingCountry.Unknown;
  middleNameTruncation: Truncation = Truncation.None;
  firstNameTruncation: Truncation = Truncation.None;
  lastNameTruncation: Truncation = Truncation.None;
  streetAddressSupplement: string | null = null;
  hairColor: HairColor = HairColor.Unknown;
  placeOfBirth: string | null = null;
  auditInformation: string | null = null;
  inventoryControlNumber: string | null = null;
  lastNameAlias: string | null = null;
  firstNameAlias: string | null = null;
  suffixAlias: string | null = null;
  suffix: NameSuffix = NameSuffix.Unknown;
  version: string | null = null;
  pdf417: string | null = null;
  expired: boolean;

  constructor(data?: Partial<ParsedLicense>) {
    Object.assign(this, data);
  }

  isExpired(): boolean {
    return this.expirationDate !== null && new Date() > this.expirationDate;
  }

  hasBeenIssued(): boolean {
    return this.issueDate !== null && new Date() > this.issueDate;
  }

  isAcceptable(): boolean {
    return (
      !this.isExpired() &&
      this.hasBeenIssued() &&
      this.expirationDate !== null &&
      this.lastName !== null &&
      this.firstName !== null &&
      this.middleName !== null &&
      this.issueDate !== null &&
      this.dateOfBirth !== null &&
      this.height !== null &&
      this.streetAddress !== null &&
      this.city !== null &&
      this.state !== null &&
      this.postalCode !== null &&
      this.documentId !== null
    );
  }
}
