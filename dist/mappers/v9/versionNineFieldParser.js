"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionNineFieldParser = void 0;
const fieldParser_1 = require("../fieldParser");
const versionNineFieldMapper_1 = require("./versionNineFieldMapper");
class VersionNineFieldParser extends fieldParser_1.FieldParser {
    constructor(data) {
        super(data, new versionNineFieldMapper_1.VersionNineFieldMapper());
    }
}
exports.VersionNineFieldParser = VersionNineFieldParser;
