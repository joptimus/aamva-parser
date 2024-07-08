"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionThreeFieldParser = void 0;
const fieldParser_1 = require("../fieldParser");
const versionThreeFieldMapper_1 = require("./versionThreeFieldMapper");
class VersionThreeFieldParser extends fieldParser_1.FieldParser {
    constructor(data) {
        super(data, new versionThreeFieldMapper_1.VersionThreeFieldMapper());
    }
    getDateFormat() {
        return "yyyyMMdd";
    }
}
exports.VersionThreeFieldParser = VersionThreeFieldParser;
