"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionNineFieldMapper = void 0;
class VersionNineFieldMapper {
    constructor() {
        this.fields = {};
        // Initialize fields if needed
    }
    fieldFor(key) {
        return this.fields[key] || key;
    }
}
exports.VersionNineFieldMapper = VersionNineFieldMapper;
