"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionFourFieldMapper = void 0;
const fieldMapping_1 = require("../fieldMapping");
class VersionFourFieldMapper {
    constructor() {
        this.fields = {};
        const fieldMapper = new fieldMapping_1.FieldMapper();
        this.fields = Object.assign({}, fieldMapper.fields); // Copy fields from FieldMapper
    }
    fieldFor(key) {
        return this.fields[key] || key;
    }
}
exports.VersionFourFieldMapper = VersionFourFieldMapper;
