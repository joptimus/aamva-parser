"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionTenFieldMapper = void 0;
const fieldMapping_1 = require("../fieldMapping");
class VersionTenFieldMapper {
    constructor() {
        this.fields = {};
        const fieldMapper = new fieldMapping_1.FieldMapper();
        this.fields = Object.assign({}, fieldMapper.fields); // Copy fields from FieldMapper
        // Initialize fields if needed
    }
    fieldFor(key) {
        return this.fields[key] || key;
    }
}
exports.VersionTenFieldMapper = VersionTenFieldMapper;
