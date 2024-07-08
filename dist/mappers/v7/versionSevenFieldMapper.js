"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionSevenFieldMapper = void 0;
class VersionSevenFieldMapper {
    constructor() {
        this.fields = {};
        // Initialize fields if needed
    }
    fieldFor(key) {
        return this.fields[key] || key;
    }
}
exports.VersionSevenFieldMapper = VersionSevenFieldMapper;
