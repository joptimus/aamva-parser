"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionTwoFieldMapper = void 0;
class VersionTwoFieldMapper {
    constructor() {
        this.fields = {};
        this.fields["firstName"] = "DCT";
    }
    fieldFor(key) {
        return this.fields[key] || key;
    }
}
exports.VersionTwoFieldMapper = VersionTwoFieldMapper;
