"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldMapper = void 0;
// Standard FieldMapping implementation based on the AAMVA Version 8 standard
class FieldMapper {
    constructor() {
        // A list of AAMVA field designator mappings (e.g. "firstName" => "DAC")
        this._fields = {
            firstName: "DAC",
            lastName: "DCS",
            middleName: "DAD",
            expirationDate: "DBA",
            issueDate: "DBD",
            dateOfBirth: "DBB",
            gender: "DBC",
            eyeColor: "DAY",
            height: "DAU",
            streetAddress: "DAG",
            city: "DAI",
            state: "DAJ",
            postalCode: "DAK",
            customerId: "DAQ",
            documentId: "DCF",
            country: "DCG",
            middleNameTruncation: "DDG",
            firstNameTruncation: "DDF",
            lastNameTruncation: "DDE",
            streetAddressSupplement: "DAH",
            hairColor: "DAZ",
            placeOfBirth: "DCI",
            auditInformation: "DCJ",
            inventoryControlNumber: "DCK",
            lastNameAlias: "DBN",
            firstNameAlias: "DBG",
            suffixAlias: "DBS",
            suffix: "DCU",
        };
    }
    // Getter for fields
    get fields() {
        return this._fields;
    }
    // Setter for fields
    set fields(newFields) {
        this._fields = newFields;
    }
    /**
     * Determine the AAMVA field designator for a particular human-readable key.
     *
     * @param key - The human-readable key
     * @returns The AAMVA field designator
     */
    fieldFor(key) {
        return this.fields[key] || "";
    }
}
exports.FieldMapper = FieldMapper;
