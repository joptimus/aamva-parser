"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionTenFieldParser = void 0;
const fieldParser_1 = require("../fieldParser");
const versionTenFieldMapper_1 = require("./versionTenFieldMapper");
class VersionTenFieldParser extends fieldParser_1.FieldParser {
    constructor(data) {
        super(data, new versionTenFieldMapper_1.VersionTenFieldMapper());
    }
}
exports.VersionTenFieldParser = VersionTenFieldParser;
