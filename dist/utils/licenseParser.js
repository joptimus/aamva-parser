"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
const regex_1 = require("../utils/regex");
const fieldParser_1 = require("../mappers/fieldParser");
const versionOneFieldParser_1 = require("../mappers/v1/versionOneFieldParser");
const versionTwoFieldParser_1 = require("../mappers/v2/versionTwoFieldParser");
const versionThreeFieldParser_1 = require("../mappers/v3/versionThreeFieldParser");
const versionFourFieldParser_1 = require("../mappers/v4/versionFourFieldParser");
const versionFiveFieldParser_1 = require("../mappers/v5/versionFiveFieldParser");
const versionEightFieldParser_1 = require("../mappers/v8/versionEightFieldParser");
class Parser {
    constructor(data) {
        this.regex = new regex_1.Regex();
        this.data = data;
        this.fieldParser = new fieldParser_1.FieldParser(data);
    }
    parse() {
        this.fieldParser = this.versionBasedFieldParsing(this.parseVersion());
        return {
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
    }
    versionBasedFieldParsing(version) {
        const defaultParser = new fieldParser_1.FieldParser(this.data);
        if (!version)
            return defaultParser;
        switch (version) {
            case "01":
                return new versionOneFieldParser_1.VersionOneFieldParser(this.data);
            case "02":
                return new versionTwoFieldParser_1.VersionTwoFieldParser(this.data);
            case "03":
                return new versionThreeFieldParser_1.VersionThreeFieldParser(this.data);
            case "04":
                return new versionFourFieldParser_1.VersionFourFieldParser(this.data);
            case "05":
                return new versionFiveFieldParser_1.VersionFiveFieldParser(this.data);
            case "08":
                return new versionEightFieldParser_1.VersionEightFieldParser(this.data);
            default:
                return defaultParser;
        }
    }
    parseVersion() {
        return this.regex.firstMatch("\\d{6}(\\d{2})\\w+", this.data);
    }
}
exports.Parser = Parser;
