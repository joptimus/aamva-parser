import { Regex } from '../utils/regex';
import { FieldParser } from '../mappers/fieldParser';
import { VersionOneFieldParser } from '../mappers/v1/versionOneFieldParser';
import { VersionTwoFieldParser } from '../mappers/v2/versionTwoFieldParser';
import { VersionThreeFieldParser } from '../mappers/v3/versionThreeFieldParser';
import { VersionFourFieldParser } from '../mappers/v4/versionFourFieldParser';
import { VersionFiveFieldParser } from '../mappers/v5/versionFiveFieldParser';
import { VersionEightFieldParser } from '../mappers/v8/versionEightFieldParser';
import { ParsedLicense } from '../models/parsedLicense';
import { License } from '../models/license';

export class LicenseParser {
  private regex: Regex = new Regex();
  public data: string;
  public fieldParser: FieldParser;

  constructor(data: string) {
    this.data = data;
    this.fieldParser = new FieldParser(data);
  }

  parse(): ParsedLicense {
    this.fieldParser = this.versionBasedFieldParsing(this.parseVersion());

    const licenseData: Partial<ParsedLicense> = {
      firstName: this.fieldParser.parseFirstName(),
      lastName: this.fieldParser.parseLastName(),
      middleName: this.fieldParser.parseMiddleName(),
      expirationDate: this.fieldParser.parseExpirationDate(),
      issueDate: this.fieldParser.parseIssueDate(),
      dateOfBirth: this.fieldParser.parseDateOfBirth(),
      gender: this.fieldParser.parseGender(),
      eyeColor: this.fieldParser.parseEyeColor(),
      height: this.fieldParser.parseHeight(),
      streetAddress: this.fieldParser.parseString("streetAddress"),
      city: this.fieldParser.parseString("city"),
      state: this.fieldParser.parseString("state"),
      postalCode: this.fieldParser.parseString("postalCode"),
      customerId: this.fieldParser.parseString("customerId"),
      documentId: this.fieldParser.parseString("documentId"),
      country: this.fieldParser.parseCountry(),
      middleNameTruncation: this.fieldParser.parseTruncationStatus("middleNameTruncation"),
      firstNameTruncation: this.fieldParser.parseTruncationStatus("firstNameTruncation"),
      lastNameTruncation: this.fieldParser.parseTruncationStatus("lastNameTruncation"),
      streetAddressSupplement: this.fieldParser.parseString("streetAddressSupplement"),
      hairColor: this.fieldParser.parseHairColor(),
      placeOfBirth: this.fieldParser.parseString("placeOfBirth"),
      auditInformation: this.fieldParser.parseString("auditInformation"),
      inventoryControlNumber: this.fieldParser.parseString("inventoryControlNumber"),
      lastNameAlias: this.fieldParser.parseString("lastNameAlias"),
      firstNameAlias: this.fieldParser.parseString("firstNameAlias"),
      suffixAlias: this.fieldParser.parseString("suffixAlias"),
      suffix: this.fieldParser.parseNameSuffix(),
      version: this.parseVersion(),
      pdf417: this.data
    };

    return new License(licenseData);
  }

  parseVersion(): string | null {
    return this.regex.firstMatch("\\d{6}(\\d{2})\\w+", this.data);
  }

  private versionBasedFieldParsing(version: string | null): FieldParser {
    const defaultParser = new FieldParser(this.data);

    if (!version) return defaultParser;

    switch (version) {
      case "01":
        return new VersionOneFieldParser(this.data);
      case "02":
        return new VersionTwoFieldParser(this.data);
      case "03":
        return new VersionThreeFieldParser(this.data);
      case "04":
        return new VersionFourFieldParser(this.data);
      case "05":
        return new VersionFiveFieldParser(this.data);
      case "08":
        return new VersionEightFieldParser(this.data);
      default:
        return defaultParser;
    }
  }
}
