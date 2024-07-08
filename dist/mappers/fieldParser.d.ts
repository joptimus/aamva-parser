import { Regex } from '../utils/regex';
import { FieldMapping } from './fieldMapping';
import { IssuingCountry } from '../enums/issuingCountry';
import { Gender } from '../enums/gender';
import { EyeColor } from '../enums/eyeColor';
import { HairColor } from '../enums/hairColor';
import { Truncation } from '../enums/truncation';
import { NameSuffix } from '../enums/nameSuffix';
export declare class FieldParser {
    static readonly INCHES_PER_CENTIMETER: number;
    regex: Regex;
    fieldMapper: FieldMapping;
    data: string;
    constructor(data: string, fieldMapper?: FieldMapping);
    parseString(key: string): string | null;
    parseDouble(key: string): number | null;
    parseDate(field: string): Date | null;
    getDateFormat(): string;
    parseFirstName(): string | null;
    parseLastName(): string | null;
    parseMiddleName(): string | null;
    parseExpirationDate(): Date | null;
    parseIssueDate(): Date | null;
    parseDateOfBirth(): Date | null;
    parseCountry(): IssuingCountry;
    parseTruncationStatus(field: string): Truncation;
    parseGender(): Gender;
    parseEyeColor(): EyeColor;
    parseNameSuffix(): NameSuffix;
    parseHairColor(): HairColor;
    parseHeight(): number | null;
}