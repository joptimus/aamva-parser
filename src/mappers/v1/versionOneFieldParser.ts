import { FieldParser } from '../fieldParser';
import { VersionOneFieldMapper } from './versionOneFieldMapper';
import { NameSuffix } from '../../enums/nameSuffix';

export class VersionOneFieldParser extends FieldParser {
  constructor(data: string) {
    super(data, new VersionOneFieldMapper());
  }

  getDateFormat(): string {
    return "yyyyMMdd";
  }

  parseFirstName(): string | null {
    const firstName = this.parseString("firstName");
    return firstName || this.parseDriverLicenseName("firstName");
  }

  parseLastName(): string | null {
    const lastName = this.parseString("lastName");
    return lastName || this.parseDriverLicenseName("lastName");
  }

  parseMiddleName(): string | null {
    const middleName = this.parseString("middleName");
    return middleName || this.parseDriverLicenseName("middleName");
  }

  parseHeight(): number | null {
    const heightInFeetAndInches = this.parseString("height");
    if (!heightInFeetAndInches) return null;

    const height = this.regex.firstMatch("([0-9]{1})", heightInFeetAndInches);
    const inches = this.regex.firstMatch("[0-9]{1}([0-9]{2})", heightInFeetAndInches);

    if (!height || !inches) return null;

    const calculatedHeight = (parseFloat(height) * 12) + parseFloat(inches);

    if (heightInFeetAndInches.includes("cm")) {
      return Math.round(calculatedHeight * FieldParser.INCHES_PER_CENTIMETER);
    } else {
      return calculatedHeight;
    }
  }

  parseNameSuffix(): NameSuffix {
    let suffix = this.parseString("suffix") || this.parseDriverLicenseName("suffix");

    if (!suffix) return NameSuffix.Unknown;

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

  private parseDriverLicenseName(key: string): string | null {
    const driverLicenseName = this.parseString("driverLicenseName");
    if (!driverLicenseName) return null;

    const namePieces = driverLicenseName.split(',');

    switch (key) {
      case "lastName":
        return namePieces[0] || null;
      case "firstName":
        return namePieces[1] || null;
      case "middleName":
        return namePieces[2] || null;
      case "suffix":
        return namePieces[3] || null;
      default:
        return null;
    }
  }
}
