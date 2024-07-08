"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionOneFieldMapper = void 0;
const fieldMapping_1 = require("../fieldMapping");
class VersionOneFieldMapper {
    constructor() {
        this.fields = {};
        const fieldMapper = new fieldMapping_1.FieldMapper();
        this.fields = Object.assign({}, fieldMapper.fields); // Copy fields from FieldMapper
        this.fields["customerId"] = "DBJ";
        this.fields["lastName"] = "DAB";
        this.fields["driverLicenseName"] = "DAA";
    }
    fieldFor(key) {
        return this.fields[key] || key;
    }
}
exports.VersionOneFieldMapper = VersionOneFieldMapper;
