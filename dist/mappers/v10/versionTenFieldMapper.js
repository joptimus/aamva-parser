"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionTenFieldMapper = void 0;
class VersionTenFieldMapper {
    constructor() {
        this.fields = {};
        // Initialize fields if needed
    }
    fieldFor(key) {
        return this.fields[key] || key;
    }
}
exports.VersionTenFieldMapper = VersionTenFieldMapper;
