"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldParser = void 0;
const regex_1 = require("../utils/regex");
const fieldMapping_1 = require("./fieldMapping");
const issuingCountry_1 = require("../enums/issuingCountry");
const gender_1 = require("../enums/gender");
const eyeColor_1 = require("../enums/eyeColor");
const hairColor_1 = require("../enums/hairColor");
const truncation_1 = require("../enums/truncation");
const nameSuffix_1 = require("../enums/nameSuffix");
class FieldParser {
    constructor(data, fieldMapper = new fieldMapping_1.FieldMapper()) {
        this.regex = new regex_1.Regex();
        this.data = data;
        this.fieldMapper = fieldMapper;
    }
    parseString(key) {
        const identifier = this.fieldMapper.fieldFor(key);
        return this.regex.firstMatch(`${identifier}(.+)\\b`, this.data);
    }
    parseDouble(key) {
        const identifier = this.fieldMapper.fieldFor(key);
        const result = this.regex.firstMatch(`${identifier}(\\w+)\\b`, this.data);
        return result ? parseFloat(result) : null;
    }
    parseDate(field) {
        const dateString = this.parseString(field);
        if (!dateString)
            return null;
        const parsedDate = new Date(dateString);
        return isNaN(parsedDate.getTime()) ? null : parsedDate;
    }
    getDateFormat() {
        return "MMddyyyy";
    }
    parseFirstName() {
        return this.parseString("firstName");
    }
    parseLastName() {
        return this.parseString("lastName");
    }
    parseMiddleName() {
        return this.parseString("middleName");
    }
    parseExpirationDate() {
        return this.parseDate("expirationDate");
    }
    parseIsExpired() {
        return this.parseExpirationDate() !== null && new Date() > this.parseExpirationDate();
    }
    parseIssueDate() {
        return this.parseDate("issueDate");
    }
    parseDateOfBirth() {
        return this.parseDate("dateOfBirth");
    }
    parseCountry() {
        const country = this.parseString("country");
        switch (country) {
            case "USA":
                return issuingCountry_1.IssuingCountry.UnitedStates;
            case "CAN":
                return issuingCountry_1.IssuingCountry.Canada;
            default:
                return issuingCountry_1.IssuingCountry.Unknown;
        }
    }
    parseTruncationStatus(field) {
        const truncation = this.parseString(field);
        switch (truncation) {
            case "T":
                return truncation_1.Truncation.Truncated;
            case "N":
                return truncation_1.Truncation.None;
            default:
                return truncation_1.Truncation.Unknown;
        }
    }
    parseGender() {
        const gender = this.parseString("gender");
        switch (gender) {
            case "1":
                return gender_1.Gender.Male;
            case "2":
                return gender_1.Gender.Female;
            default:
                return gender_1.Gender.Other;
        }
    }
    parseEyeColor() {
        const color = this.parseString("eyeColor");
        switch (color) {
            case "BLK":
                return eyeColor_1.EyeColor.Black;
            case "BLU":
                return eyeColor_1.EyeColor.Blue;
            case "BRO":
                return eyeColor_1.EyeColor.Brown;
            case "GRY":
                return eyeColor_1.EyeColor.Gray;
            case "GRN":
                return eyeColor_1.EyeColor.Green;
            case "HAZ":
                return eyeColor_1.EyeColor.Hazel;
            case "MAR":
                return eyeColor_1.EyeColor.Maroon;
            case "PNK":
                return eyeColor_1.EyeColor.Pink;
            case "DIC":
                return eyeColor_1.EyeColor.Dichromatic;
            default:
                return eyeColor_1.EyeColor.Unknown;
        }
    }
    parseNameSuffix() {
        const suffix = this.parseString("suffix");
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
    parseHairColor() {
        const color = this.parseString("hairColor");
        switch (color) {
            case "BAL":
                return hairColor_1.HairColor.Bald;
            case "BLK":
                return hairColor_1.HairColor.Black;
            case "BLN":
                return hairColor_1.HairColor.Blond;
            case "BRO":
                return hairColor_1.HairColor.Brown;
            case "GRY":
                return hairColor_1.HairColor.Grey;
            case "RED":
                return hairColor_1.HairColor.Red;
            case "SDY":
                return hairColor_1.HairColor.Sandy;
            case "WHI":
                return hairColor_1.HairColor.White;
            default:
                return hairColor_1.HairColor.Unknown;
        }
    }
    parseHeight() {
        const heightString = this.parseString("height");
        const height = this.parseDouble("height");
        if (!heightString || !height)
            return null;
        return heightString.includes("cm")
            ? Math.round(height * FieldParser.INCHES_PER_CENTIMETER)
            : height;
    }
}
exports.FieldParser = FieldParser;
FieldParser.INCHES_PER_CENTIMETER = 0.393701;
