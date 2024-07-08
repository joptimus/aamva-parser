"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = require("./classes/parser");
class Main {
    constructor(data) {
        this.data = data;
        this.licenseParser = new parser_1.LicenseParser(data);
    }
    parse() {
        return this.licenseParser.parse();
    }
    getVersion() {
        return this.licenseParser.parseVersion();
    }
}
exports.default = Main;
