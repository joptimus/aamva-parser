export interface FieldMapping {
    fields: {
        [key: string]: string;
    };
    /**
     * Determine the AAMVA field designator for a particular human-readable key.
     *
     * @param key - The human-readable key
     * @returns The AAMVA field designator
     */
    fieldFor(key: string): string;
}
export declare class FieldMapper implements FieldMapping {
    fields: {
        [key: string]: string;
    };
    /**
     * Determine the AAMVA field designator for a particular human-readable key.
     *
     * @param key - The human-readable key
     * @returns The AAMVA field designator
     */
    fieldFor(key: string): string;
}
