"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.License = void 0;
const enums_1 = require("../enums");
class License {
    constructor(data) {
        this.firstName = null;
        this.lastName = null;
        this.middleName = null;
        this.expirationDate = null;
        this.issueDate = null;
        this.dateOfBirth = null;
        this.gender = enums_1.Gender.Unknown;
        this.eyeColor = enums_1.EyeColor.Unknown;
        this.height = null;
        this.streetAddress = null;
        this.city = null;
        this.state = null;
        this.postalCode = null;
        this.customerId = null;
        this.documentId = null;
        this.country = enums_1.IssuingCountry.Unknown;
        this.middleNameTruncation = enums_1.Truncation.None;
        this.firstNameTruncation = enums_1.Truncation.None;
        this.lastNameTruncation = enums_1.Truncation.None;
        this.streetAddressSupplement = null;
        this.hairColor = enums_1.HairColor.Unknown;
        this.placeOfBirth = null;
        this.auditInformation = null;
        this.inventoryControlNumber = null;
        this.lastNameAlias = null;
        this.firstNameAlias = null;
        this.suffixAlias = null;
        this.suffix = enums_1.NameSuffix.Unknown;
        this.version = null;
        this.pdf417 = null;
        Object.assign(this, data);
    }
    isExpired() {
        return this.expirationDate !== null && new Date() > this.expirationDate;
    }
    hasBeenIssued() {
        return this.issueDate !== null && new Date() > this.issueDate;
    }
    isAcceptable() {
        return (!this.isExpired() &&
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
            this.documentId !== null);
    }
}
exports.License = License;
