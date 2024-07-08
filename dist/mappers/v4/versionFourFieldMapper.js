"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionFourFieldMapper = void 0;
class VersionFourFieldMapper {
    constructor() {
        this.fields = {};
        // Initialize fields if needed
    }
    fieldFor(key) {
        return this.fields[key] || key;
    }
}
exports.VersionFourFieldMapper = VersionFourFieldMapper;
