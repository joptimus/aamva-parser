import { ParsedLicense } from "./parsedLicense";
import { LicenseParser } from "./classes/parser";

// Export types for TypeScript users
export { ParsedLicense } from "./parsedLicense";
export { Gender, EyeColor, HairColor, IssuingCountry, Truncation, NameSuffix } from "./enums";

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
