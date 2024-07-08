"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionThreeFieldMapper = void 0;
class VersionThreeFieldMapper {
    constructor() {
        this.fields = {};
        this.fields["firstName"] = "DCT";
    }
    fieldFor(key) {
        return this.fields[key] || key;
    }
}
exports.VersionThreeFieldMapper = VersionThreeFieldMapper;
