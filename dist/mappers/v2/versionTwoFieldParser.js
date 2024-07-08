"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionTwoFieldParser = void 0;
const fieldParser_1 = require("../fieldParser");
const versionTwoFieldMapper_1 = require("./versionTwoFieldMapper");
class VersionTwoFieldParser extends fieldParser_1.FieldParser {
    constructor(data) {
        super(data, new versionTwoFieldMapper_1.VersionTwoFieldMapper());
    }
}
exports.VersionTwoFieldParser = VersionTwoFieldParser;
