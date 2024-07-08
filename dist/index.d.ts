import { ParsedLicense } from "./parsedLicense";
export declare function ParseScan(barcode: string): ParsedLicense;
export declare function GetVersion(barcode: string): string;
export declare function IsExpired(barcode: string): boolean;
