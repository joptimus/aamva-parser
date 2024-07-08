import { ParsedLicense } from "./parsedLicense";
import { LicenseParser } from './classes/parser';


export function parseScan(barcode: string): ParsedLicense {
    const parser = new LicenseParser(barcode);
    return parser.parse();
}

export function getVersion(barcode: string) {
    const parser = new LicenseParser(barcode);
    return parser.parseVersion();
}
