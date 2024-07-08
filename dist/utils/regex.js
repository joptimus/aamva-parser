"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Regex = void 0;
class Regex {
    firstMatch(pattern, data) {
        try {
            const regex = new RegExp(pattern, 'i');
            const matches = regex.exec(data);
            if (!matches || matches.length < 2) {
                return null;
            }
            const matchedGroup = matches[1].trim();
            return matchedGroup.length > 0 ? matchedGroup : null;
        }
        catch (error) {
            return null;
        }
    }
}
exports.Regex = Regex;
