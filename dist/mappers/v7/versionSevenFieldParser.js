"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionSevenFieldParser = void 0;
const fieldParser_1 = require("../fieldParser");
const versionSevenFieldMapper_1 = require("./versionSevenFieldMapper");
class VersionSevenFieldParser extends fieldParser_1.FieldParser {
    constructor(data) {
        super(data, new versionSevenFieldMapper_1.VersionSevenFieldMapper());
    }
}
exports.VersionSevenFieldParser = VersionSevenFieldParser;
