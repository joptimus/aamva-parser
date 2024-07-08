import { Regex } from '../utils/regex';
import { FieldMapping, FieldMapper } from './fieldMapping';
import { IssuingCountry } from '../enums/issuingCountry';
import { Gender } from '../enums/gender';
import { EyeColor } from '../enums/eyeColor';
import { HairColor } from '../enums/hairColor';
import { Truncation } from '../enums/truncation';
import { NameSuffix } from '../enums/nameSuffix';

export class FieldParser {
  static readonly INCHES_PER_CENTIMETER: number = 0.393701;
  regex: Regex = new Regex();
  fieldMapper: FieldMapping;
  data: string;

  constructor(data: string, fieldMapper: FieldMapping = new FieldMapper()) {
    this.data = data;
    this.fieldMapper = fieldMapper;
  }

  parseString(key: string): string | null {
    const identifier = this.fieldMapper.fieldFor(key);
    return this.regex.firstMatch(`${identifier}(.+)\\b`, this.data);
  }

  parseDouble(key: string): number | null {
    const identifier = this.fieldMapper.fieldFor(key);
    const result = this.regex.firstMatch(`${identifier}(\\w+)\\b`, this.data);
    return result ? parseFloat(result) : null;
  }

  parseDate(field: string): Date | null {
    const dateString = this.parseString(field);
    if (!dateString) return null;

    const parsedDate = new Date(dateString);
    return isNaN(parsedDate.getTime()) ? null : parsedDate;
  }

  getDateFormat(): string {
    return "MMddyyyy";
  }

  parseFirstName(): string | null {
    return this.parseString("firstName");
  }

  parseLastName(): string | null {
    return this.parseString("lastName");
  }

  parseMiddleName(): string | null {
    return this.parseString("middleName");
  }

  parseExpirationDate(): Date | null {
    return this.parseDate("expirationDate");
  }

  parseIssueDate(): Date | null {
    return this.parseDate("issueDate");
  }

  parseDateOfBirth(): Date | null {
    return this.parseDate("dateOfBirth");
  }

  parseCountry(): IssuingCountry {
    const country = this.parseString("country");
    switch (country) {
      case "USA":
        return IssuingCountry.UnitedStates;
      case "CAN":
        return IssuingCountry.Canada;
      default:
        return IssuingCountry.Unknown;
    }
  }

  parseTruncationStatus(field: string): Truncation {
    const truncation = this.parseString(field);
    switch (truncation) {
      case "T":
        return Truncation.Truncated;
      case "N":
        return Truncation.None;
      default:
        return Truncation.Unknown;
    }
  }

  parseGender(): Gender {
    const gender = this.parseString("gender");
    switch (gender) {
      case "1":
        return Gender.Male;
      case "2":
        return Gender.Female;
      default:
        return Gender.Other;
    }
  }

  parseEyeColor(): EyeColor {
    const color = this.parseString("eyeColor");
    switch (color) {
      case "BLK":
        return EyeColor.Black;
      case "BLU":
        return EyeColor.Blue;
      case "BRO":
        return EyeColor.Brown;
      case "GRY":
        return EyeColor.Gray;
      case "GRN":
        return EyeColor.Green;
      case "HAZ":
        return EyeColor.Hazel;
      case "MAR":
        return EyeColor.Maroon;
      case "PNK":
        return EyeColor.Pink;
      case "DIC":
        return EyeColor.Dichromatic;
      default:
        return EyeColor.Unknown;
    }
  }

  parseNameSuffix(): NameSuffix {
    const suffix = this.parseString("suffix");
    switch (suffix) {
      case "JR":
        return NameSuffix.Junior;
      case "SR":
        return NameSuffix.Senior;
      case "1ST":
      case "I":
        return NameSuffix.First;
      case "2ND":
      case "II":
        return NameSuffix.Second;
      case "3RD":
      case "III":
        return NameSuffix.Third;
      case "4TH":
      case "IV":
        return NameSuffix.Fourth;
      case "5TH":
      case "V":
        return NameSuffix.Fifth;
      case "6TH":
      case "VI":
        return NameSuffix.Sixth;
      case "7TH":
      case "VII":
        return NameSuffix.Seventh;
      case "8TH":
      case "VIII":
        return NameSuffix.Eighth;
      case "9TH":
      case "IX":
        return NameSuffix.Ninth;
      default:
        return NameSuffix.Unknown;
    }
  }

  parseHairColor(): HairColor {
    const color = this.parseString("hairColor");
    switch (color) {
      case "BAL":
        return HairColor.Bald;
      case "BLK":
        return HairColor.Black;
      case "BLN":
        return HairColor.Blond;
      case "BRO":
        return HairColor.Brown;
      case "GRY":
        return HairColor.Grey;
      case "RED":
        return HairColor.Red;
      case "SDY":
        return HairColor.Sandy;
      case "WHI":
        return HairColor.White;
      default:
        return HairColor.Unknown;
    }
  }

  parseHeight(): number | null {
    const heightString = this.parseString("height");
    const height = this.parseDouble("height");
    if (!heightString || !height) return null;

    return heightString.includes("cm")
      ? Math.round(height * FieldParser.INCHES_PER_CENTIMETER)
      : height;
  }
}
