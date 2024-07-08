import { FieldMapping } from '../fieldMapping';
export declare class VersionSixFieldMapper implements FieldMapping {
    fields: {
        [key: string]: string;
    };
    constructor();
    fieldFor(key: string): string;
}
