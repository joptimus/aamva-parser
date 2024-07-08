"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionEightFieldParser = void 0;
const fieldParser_1 = require("../fieldParser");
const versionEightFieldMapper_1 = require("./versionEightFieldMapper");
class VersionEightFieldParser extends fieldParser_1.FieldParser {
    constructor(data) {
        super(data, new versionEightFieldMapper_1.VersionEightFieldMapper());
    }
}
exports.VersionEightFieldParser = VersionEightFieldParser;
