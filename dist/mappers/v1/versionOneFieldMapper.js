"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionOneFieldMapper = void 0;
class VersionOneFieldMapper {
    constructor() {
        this.fields = {};
        this.fields["customerId"] = "DBJ";
        this.fields["lastName"] = "DAB";
        this.fields["driverLicenseName"] = "DAA";
    }
    fieldFor(key) {
        return this.fields[key] || key;
    }
}
exports.VersionOneFieldMapper = VersionOneFieldMapper;
