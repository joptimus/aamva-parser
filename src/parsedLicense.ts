import { Gender, EyeColor, IssuingCountry, Truncation, HairColor, NameSuffix } from './enums';

export interface ParsedLicense {
  firstName?: string | null;
  lastName?: string | null;
  middleName?: string | null;
  expirationDate?: Date | null;
  issueDate?: Date | null;
  dateOfBirth?: Date | null;
  gender?: Gender;
  eyeColor?: EyeColor;
  height?: number | null;
  streetAddress?: string | null;
  city?: string | null;
  state?: string | null;
  postalCode?: string | null;
  customerId?: string | null;
  documentId?: string | null;
  country?: IssuingCountry;
  middleNameTruncation?: Truncation;
  firstNameTruncation?: Truncation;
  lastNameTruncation?: Truncation;
  streetAddressSupplement?: string | null;
  hairColor?: HairColor;
  placeOfBirth?: string | null;
  auditInformation?: string | null;
  inventoryControlNumber?: string | null;
  lastNameAlias?: string | null;
  firstNameAlias?: string | null;
  suffixAlias?: string | null;
  suffix?: NameSuffix;
  version?: string | null;
  pdf417?: string | null;
  isExpired(): boolean;
  expired?: boolean;
  hasBeenIssued(): boolean;
  isAcceptable(): boolean;
}
