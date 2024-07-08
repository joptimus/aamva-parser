import { FieldMapping } from '../fieldMapping';
export declare class VersionOneFieldMapper implements FieldMapping {
    private fields;
    constructor();
    fieldFor(key: string): string;
}
