import { FieldMapping } from '../fieldMapping';
export declare class VersionFourFieldMapper implements FieldMapping {
    fields: {
        [key: string]: string;
    };
    constructor();
    fieldFor(key: string): string;
}
