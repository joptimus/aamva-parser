"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = require("./classes/parser");
class AAMVA {
    constructor(data) {
        this.data = data;
        this.licenseParser = new parser_1.LicenseParser(data);
    }
    parse(data) {
        return this.licenseParser.parse(data);
    }
    getVersion() {
        return this.licenseParser.parseVersion();
    }
}
exports.default = AAMVA;
