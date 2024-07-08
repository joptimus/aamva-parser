"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionFiveFieldMapper = void 0;
class VersionFiveFieldMapper {
    constructor() {
        this.fields = {};
        // Initialize fields if needed
    }
    fieldFor(key) {
        return this.fields[key] || key;
    }
}
exports.VersionFiveFieldMapper = VersionFiveFieldMapper;
