import { FieldParser } from '../mappers/fieldParser';
import { ParsedLicense } from '../types/aamva-parser';
export declare class Parser {
    private regex;
    data: string;
    fieldParser: FieldParser;
    constructor(data: string);
    parse(): ParsedLicense;
    private versionBasedFieldParsing;
    private parseVersion;
}
