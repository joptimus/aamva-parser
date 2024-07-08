import { FieldMapping } from '../fieldMapping';
export declare class VersionThreeFieldMapper implements FieldMapping {
    fields: {
        [key: string]: string;
    };
    constructor();
    fieldFor(key: string): string;
}
