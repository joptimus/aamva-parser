import { FieldParser } from '../mappers/fieldParser';
import { ParsedLicense } from '../models/parsedLicense';
export declare class LicenseParser {
    private regex;
    data: string;
    fieldParser: FieldParser;
    constructor(data: string);
    parse(): ParsedLicense;
    parseVersion(): string | null;
    private versionBasedFieldParsing;
}
