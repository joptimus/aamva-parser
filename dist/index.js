"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseScan = parseScan;
exports.getVersion = getVersion;
const parser_1 = require("./classes/parser");
function parseScan(barcode) {
    const parser = new parser_1.LicenseParser(barcode);
    return parser.parse();
}
function getVersion(barcode) {
    const parser = new parser_1.LicenseParser(barcode);
    return parser.parseVersion();
}
