"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseScan = ParseScan;
exports.GetVersion = GetVersion;
exports.IsExpired = IsExpired;
const parser_1 = require("./classes/parser");
function ParseScan(barcode) {
    const parser = new parser_1.LicenseParser(barcode);
    return parser.parse();
}
function GetVersion(barcode) {
    const parser = new parser_1.LicenseParser(barcode);
    return parser.parseVersion();
}
function IsExpired(barcode) {
    const parser = new parser_1.LicenseParser(barcode);
    return parser.isExpired();
}
