import { FieldMapping } from '../fieldMapping';
export declare class VersionFiveFieldMapper implements FieldMapping {
    fields: {
        [key: string]: string;
    };
    constructor();
    fieldFor(key: string): string;
}
