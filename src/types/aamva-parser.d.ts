import { IssuingCountry } from '../enums/issuingCountry';
import { Gender } from '../enums/gender';
import { EyeColor } from '../enums/eyeColor';
import { HairColor } from '../enums/hairColor';
import { Truncation } from '../enums/truncation';
import { NameSuffix } from '../enums/nameSuffix';

export interface ParsedLicense {
  firstName: string | null;
  lastName: string | null;
  middleName: string | null;
  expirationDate: Date | null;
  issueDate: Date | null;
  dateOfBirth: Date | null;
  gender: Gender | null;
  eyeColor: EyeColor | null;
  height: number | null;
  streetAddress: string | null;
  city: string | null;
  state: string | null;
  postalCode: string | null;
  customerId: string | null;
  documentId: string | null;
  country: IssuingCountry | null;
  middleNameTruncation: Truncation | null;
  firstNameTruncation: Truncation | null;
  lastNameTruncation: Truncation | null;
  streetAddressSupplement: string | null;
  hairColor: HairColor | null;
  placeOfBirth: string | null;
  auditInformation: string | null;
  inventoryControlNumber: string | null;
  lastNameAlias: string | null;
  firstNameAlias: string | null;
  suffixAlias: string | null;
  suffix: NameSuffix | null;
  version: string | null;
  pdf417: string;
}
