import { FieldMapping } from "../fieldMapping";
export declare class VersionOneFieldMapper implements FieldMapping {
    fields: {
        [key: string]: string;
    };
    constructor();
    fieldFor(key: string): string;
}
