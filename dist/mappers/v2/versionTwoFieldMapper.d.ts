import { FieldMapping } from '../fieldMapping';
export declare class VersionTwoFieldMapper implements FieldMapping {
    fields: {
        [key: string]: string;
    };
    constructor();
    fieldFor(key: string): string;
}
