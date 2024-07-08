"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionFiveFieldParser = void 0;
const fieldParser_1 = require("../fieldParser");
const versionFiveFieldMapper_1 = require("./versionFiveFieldMapper");
class VersionFiveFieldParser extends fieldParser_1.FieldParser {
    constructor(data) {
        super(data, new versionFiveFieldMapper_1.VersionFiveFieldMapper());
    }
}
exports.VersionFiveFieldParser = VersionFiveFieldParser;
