import { ParsedLicense } from "./parsedLicense";
import { LicenseParser } from "./classes/parser";

export function Parse(barcode: string): ParsedLicense {
  const parser = new LicenseParser(barcode);
  return parser.parse();
}

export function GetVersion(barcode: string) {
  const parser = new LicenseParser(barcode);
  return parser.parseVersion();
}

export function IsExpired(barcode: string) {
  const parser = new LicenseParser(barcode);
  return parser.isExpired();
}
