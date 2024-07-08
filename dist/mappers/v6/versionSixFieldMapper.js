"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionSixFieldMapper = void 0;
class VersionSixFieldMapper {
    constructor() {
        this.fields = {};
        // Initialize fields if needed
    }
    fieldFor(key) {
        return this.fields[key] || key;
    }
}
exports.VersionSixFieldMapper = VersionSixFieldMapper;
