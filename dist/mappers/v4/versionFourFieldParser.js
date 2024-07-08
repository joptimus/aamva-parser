"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionFourFieldParser = void 0;
const fieldParser_1 = require("../fieldParser");
const versionFourFieldMapper_1 = require("./versionFourFieldMapper");
class VersionFourFieldParser extends fieldParser_1.FieldParser {
    constructor(data) {
        super(data, new versionFourFieldMapper_1.VersionFourFieldMapper());
    }
}
exports.VersionFourFieldParser = VersionFourFieldParser;
