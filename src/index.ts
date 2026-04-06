import { ParsedLicense } from "./parsedLicense";
import { LicenseParser } from "./classes/parser";

// Export types for TypeScript users
export { ParsedLicense } from "./parsedLicense";
export { Gender, EyeColor, HairColor, IssuingCountry, Truncation, NameSuffix } from "./enums";

// --- Core API (camelCase) ---

export function parse(barcode: string): ParsedLicense {
  const parser = new LicenseParser(barcode);
  return parser.parse();
}

export function getVersion(barcode: string): string | null {
  const parser = new LicenseParser(barcode);
  return parser.parseVersion();
}

export function isExpired(barcode: string): boolean {
  const parser = new LicenseParser(barcode);
  return parser.isExpired();
}

// --- Helper functions ---

export function getAge(barcode: string): number | null {
  const license = parse(barcode);
  if (!license.dateOfBirth) return null;
  const today = new Date();
  const dob = license.dateOfBirth;
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
  return age;
}

export function isUnder21(barcode: string): boolean {
  const age = getAge(barcode);
  return age !== null && age < 21;
}

export function isUnder18(barcode: string): boolean {
  const age = getAge(barcode);
  return age !== null && age < 18;
}

export function isAcceptable(barcode: string): boolean {
  const license = parse(barcode);
  return license.isAcceptable();
}

export function getFullName(barcode: string): string | null {
  const license = parse(barcode);
  const parts = [license.firstName, license.middleName, license.lastName].filter(Boolean);
  return parts.length > 0 ? parts.join(' ') : null;
}

export function getState(barcode: string): string | null {
  const license = parse(barcode);
  return license.state ?? null;
}

export function isCDL(barcode: string): boolean {
  const license = parse(barcode);
  return license.cdlIndicator === '1';
}

// --- Deprecated PascalCase aliases (backwards compat) ---

/** @deprecated Use `parse()` instead */
export function Parse(barcode: string): ParsedLicense {
  return parse(barcode);
}

/** @deprecated Use `getVersion()` instead */
export function GetVersion(barcode: string): string | null {
  return getVersion(barcode);
}

/** @deprecated Use `isExpired()` instead */
export function IsExpired(barcode: string): boolean {
  return isExpired(barcode);
}
