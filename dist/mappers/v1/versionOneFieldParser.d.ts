import { FieldParser } from '../fieldParser';
import { NameSuffix } from '../../enums/nameSuffix';
export declare class VersionOneFieldParser extends FieldParser {
    constructor(data: string);
    getDateFormat(): string;
    parseFirstName(): string | null;
    parseLastName(): string | null;
    parseMiddleName(): string | null;
    parseHeight(): number | null;
    parseNameSuffix(): NameSuffix;
    private parseDriverLicenseName;
}
