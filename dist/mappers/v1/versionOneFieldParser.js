"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionOneFieldParser = void 0;
const fieldParser_1 = require("../fieldParser");
const versionOneFieldMapper_1 = require("./versionOneFieldMapper");
const nameSuffix_1 = require("../../enums/nameSuffix");
class VersionOneFieldParser extends fieldParser_1.FieldParser {
    constructor(data) {
        super(data, new versionOneFieldMapper_1.VersionOneFieldMapper());
    }
    getDateFormat() {
        return "yyyyMMdd";
    }
    parseFirstName() {
        const firstName = this.parseString("firstName");
        return firstName || this.parseDriverLicenseName("firstName");
    }
    parseLastName() {
        const lastName = this.parseString("lastName");
        return lastName || this.parseDriverLicenseName("lastName");
    }
    parseMiddleName() {
        const middleName = this.parseString("middleName");
        return middleName || this.parseDriverLicenseName("middleName");
    }
    parseHeight() {
        const heightInFeetAndInches = this.parseString("height");
        if (!heightInFeetAndInches)
            return null;
        const height = this.regex.firstMatch("([0-9]{1})", heightInFeetAndInches);
        const inches = this.regex.firstMatch("[0-9]{1}([0-9]{2})", heightInFeetAndInches);
        if (!height || !inches)
            return null;
        const calculatedHeight = (parseFloat(height) * 12) + parseFloat(inches);
        if (heightInFeetAndInches.includes("cm")) {
            return Math.round(calculatedHeight * fieldParser_1.FieldParser.INCHES_PER_CENTIMETER);
        }
        else {
            return calculatedHeight;
        }
    }
    parseNameSuffix() {
        let suffix = this.parseString("suffix") || this.parseDriverLicenseName("suffix");
        if (!suffix)
            return nameSuffix_1.NameSuffix.Unknown;
        switch (suffix) {
            case "JR":
                return nameSuffix_1.NameSuffix.Junior;
            case "SR":
                return nameSuffix_1.NameSuffix.Senior;
            case "1ST":
            case "I":
                return nameSuffix_1.NameSuffix.First;
            case "2ND":
            case "II":
                return nameSuffix_1.NameSuffix.Second;
            case "3RD":
            case "III":
                return nameSuffix_1.NameSuffix.Third;
            case "4TH":
            case "IV":
                return nameSuffix_1.NameSuffix.Fourth;
            case "5TH":
            case "V":
                return nameSuffix_1.NameSuffix.Fifth;
            case "6TH":
            case "VI":
                return nameSuffix_1.NameSuffix.Sixth;
            case "7TH":
            case "VII":
                return nameSuffix_1.NameSuffix.Seventh;
            case "8TH":
            case "VIII":
                return nameSuffix_1.NameSuffix.Eighth;
            case "9TH":
            case "IX":
                return nameSuffix_1.NameSuffix.Ninth;
            default:
                return nameSuffix_1.NameSuffix.Unknown;
        }
    }
    parseDriverLicenseName(key) {
        const driverLicenseName = this.parseString("driverLicenseName");
        if (!driverLicenseName)
            return null;
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
exports.VersionOneFieldParser = VersionOneFieldParser;
