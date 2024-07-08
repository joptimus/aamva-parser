import { FieldMapping } from '../fieldMapping';
export declare class VersionTenFieldMapper implements FieldMapping {
    fields: {
        [key: string]: string;
    };
    constructor();
    fieldFor(key: string): string;
}
