"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionEightFieldMapper = void 0;
class VersionEightFieldMapper {
    constructor() {
        this.fields = {};
        // Initialize fields if needed
    }
    fieldFor(key) {
        return this.fields[key] || key;
    }
}
exports.VersionEightFieldMapper = VersionEightFieldMapper;
