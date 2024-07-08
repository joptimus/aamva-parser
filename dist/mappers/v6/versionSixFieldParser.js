"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionSixFieldParser = void 0;
const fieldParser_1 = require("../fieldParser");
const versionSixFieldMapper_1 = require("./versionSixFieldMapper");
class VersionSixFieldParser extends fieldParser_1.FieldParser {
    constructor(data) {
        super(data, new versionSixFieldMapper_1.VersionSixFieldMapper());
    }
}
exports.VersionSixFieldParser = VersionSixFieldParser;
