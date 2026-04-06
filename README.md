# aamva-parser

[![npm version](https://img.shields.io/npm/v/aamva-parser.svg)](https://www.npmjs.com/package/aamva-parser)
[![npm downloads](https://img.shields.io/npm/dm/aamva-parser.svg)](https://www.npmjs.com/package/aamva-parser)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-blue.svg)](https://www.typescriptlang.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-green.svg)](https://opensource.org/licenses/ISC)

Parse AAMVA PDF417 barcode data from US and Canadian driver's licenses and ID cards. TypeScript-ready, zero dependencies.

Supports AAMVA versions 1-12 (CDS 2000-2025). Built-in helpers for age verification, name formatting, and CDL detection.

## Requirements

- Node.js >= 20

## Installation

```bash
npm install aamva-parser
```

## Usage

### ES Modules

```js
import { parse, isExpired, getVersion, getAge, isUnder21, getFullName } from "aamva-parser";

// Parse the PDF417 barcode data
const license = parse(barcodeData);

console.log(license.firstName);    // "JOHN"
console.log(license.lastName);     // "PUBLIC"
console.log(license.dateOfBirth);  // Date object
console.log(license.expirationDate); // Date object
console.log(license.expired);      // false

// Quick helpers
const age = getAge(barcodeData);        // 56
const under21 = isUnder21(barcodeData); // false
const name = getFullName(barcodeData);  // "JOHN QUINCY PUBLIC"

// Check if license is expired
const expired = isExpired(barcodeData); // boolean

// Get AAMVA version
const version = getVersion(barcodeData); // "08"
```

### CommonJS

```js
const { parse, isExpired, getVersion } = require("aamva-parser");

const license = parse(barcodeData);
```

### TypeScript

```ts
import {
  parse,
  ParsedLicense,
  Gender,
  EyeColor
} from "aamva-parser";

const license: ParsedLicense = parse(barcodeData);

if (license.gender === Gender.Male) {
  console.log("Male");
}

if (license.eyeColor === EyeColor.Brown) {
  console.log("Brown eyes");
}
```

## API

### `parse(barcodeData: string): ParsedLicense`

Parses the raw PDF417 barcode string and returns a `ParsedLicense` object with all extracted fields.

### `getVersion(barcodeData: string): string | null`

Returns the AAMVA version number (e.g., "08" for version 8).

### `isExpired(barcodeData: string): boolean`

Returns `true` if the license expiration date has passed.

### `getAge(barcodeData: string): number | null`

Returns the person's age in years, calculated from date of birth. Returns `null` if no date of birth is present.

### `isUnder21(barcodeData: string): boolean`

Returns `true` if the person is under 21. Returns `false` if 21+ or if no date of birth is present.

### `isUnder18(barcodeData: string): boolean`

Returns `true` if the person is under 18. Returns `false` if 18+ or if no date of birth is present.

### `isAcceptable(barcodeData: string): boolean`

Returns `true` if the license is not expired, has been issued, and contains all required fields (name, address, dates, document ID).

### `getFullName(barcodeData: string): string | null`

Returns the full name formatted as "FIRST MIDDLE LAST". Omits middle name if not present. Returns `null` if no name fields exist.

### `getState(barcodeData: string): string | null`

Returns the state/jurisdiction code (e.g., "CA", "TX"). Returns `null` if not present.

### `isCDL(barcodeData: string): boolean`

Returns `true` if the license is a Commercial Driver's License (v12/CDS 2025 only).

### Deprecated Functions

The following PascalCase functions still work but are deprecated. Use the camelCase versions instead:

| Deprecated | Use Instead |
|:-----------|:------------|
| `Parse()` | `parse()` |
| `GetVersion()` | `getVersion()` |
| `IsExpired()` | `isExpired()` |

## Supported Fields

| Field | Type | Attribute |
|:------|:-----|:----------|
| First Name | `string` | `firstName` |
| Last Name | `string` | `lastName` |
| Middle Name | `string` | `middleName` |
| Expiration Date | `Date` | `expirationDate` |
| Issue Date | `Date` | `issueDate` |
| Date of Birth | `Date` | `dateOfBirth` |
| Gender | `Gender` | `gender` |
| Eye Color | `EyeColor` | `eyeColor` |
| Hair Color | `HairColor` | `hairColor` |
| Height (inches) | `number` | `height` |
| Weight (lbs) | `string` | `weight` |
| Street Address | `string` | `streetAddress` |
| Street Address Line 2 | `string` | `streetAddressSupplement` |
| City | `string` | `city` |
| State | `string` | `state` |
| Postal Code | `string` | `postalCode` |
| Driver's License ID | `string` | `driversLicenseId` |
| Document ID | `string` | `documentId` |
| Issuing Country | `IssuingCountry` | `country` |
| Name Suffix | `NameSuffix` | `suffix` |
| First Name Truncation | `Truncation` | `firstNameTruncation` |
| Middle Name Truncation | `Truncation` | `middleNameTruncation` |
| Last Name Truncation | `Truncation` | `lastNameTruncation` |
| Place of Birth | `string` | `placeOfBirth` |
| Audit Information | `string` | `auditInformation` |
| Inventory Control Number | `string` | `inventoryControlNumber` |
| First Name Alias | `string` | `firstNameAlias` |
| Last Name Alias | `string` | `lastNameAlias` |
| Suffix Alias | `string` | `suffixAlias` |
| CDL Indicator | `string` | `cdlIndicator` |
| Non-Domiciled Indicator | `string` | `nonDomiciledIndicator` |
| Enhanced Credential Indicator | `string` | `enhancedCredentialIndicator` |
| Permit Indicator | `string` | `permitIndicator` |
| Is Expired | `boolean` | `expired` |
| AAMVA Version | `string` | `version` |
| Raw Barcode Data | `string` | `pdf417` |

## AAMVA Version Support

| CDS Version | Year | Barcode Version | Supported |
|:------------|:-----|:----------------|:----------|
| 2000 | 2000 | 01 | Yes |
| 2003 | 2003 | 02 | Yes |
| 2005 | 2005 | 03 | Yes |
| 2009 | 2009 | 04-05 | Yes |
| 2010 | 2010 | 06 | Yes |
| 2011 | 2011 | 07 | Yes |
| 2012 | 2012 | 08 | Yes |
| 2013 | 2013 | 09 | Yes |
| 2016 | 2016 | 10 | Yes |
| 2020 | 2020 | 11 | Yes |
| 2025 | 2025 | 12 | Yes |

## Example

### Raw PDF417 Barcode Data (Version 8)

```
@

ANSI 636026080102DL00410288ZA03290015DLDAQD12345678
DCSPUBLIC
DDEN
DACJOHN
DDFN
DADQUINCY
DDGN
DCAD
DCBNONE
DCDNONE
DBD08242015
DBB01311970
DBA01312035
DBC1
DAU069 in
DAYGRN
DAG789 E OAK ST
DAIANYTOWN
DAJCA
DAK902230000
DCF83D9BN217QO983B1
DCGUSA
DAW180
DAZBRO
DCK12345678900000000000
DDB02142014
DDK1
ZAZAAN
ZAB
ZAC
```

### Parsed Result

```js
{
  firstName: "JOHN",
  lastName: "PUBLIC",
  middleName: "QUINCY",
  dateOfBirth: Date("1970-01-31"),
  expirationDate: Date("2035-01-31"),
  issueDate: Date("2015-08-24"),
  gender: "Male",
  eyeColor: "Green",
  hairColor: "Brown",
  height: 69,
  weight: "180",
  streetAddress: "789 E OAK ST",
  city: "ANYTOWN",
  state: "CA",
  postalCode: "902230000",
  driversLicenseId: "D12345678",
  documentId: "83D9BN217QO983B1",
  country: "United States",
  inventoryControlNumber: "12345678900000000000",
  expired: false,
  version: "08"
}
```

## AAMVA Element IDs by Version

**Bold** = Mandatory field | `--` = Not included in version

| Field | v1 | v2 | v3 | v4 | v5 | v6 | v7 | v8 | v9 | v10 | v11 | v12 |
|:------|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:---:|:---:|:---:|
| First Name | DAC | **DCT** | **DCT** | **DAC** | **DAC** | **DAC** | **DAC** | **DAC** | **DAC** | **DAC** | **DAC** | **DAC** |
| Last Name | DAB | **DCS** | **DCS** | **DCS** | **DCS** | **DCS** | **DCS** | **DCS** | **DCS** | **DCS** | **DCS** | **DCS** |
| Middle Name | DAD | **DAD** | **DAD** | **DAD** | **DAD** | **DAD** | **DAD** | **DAD** | **DAD** | **DAD** | **DAD** | **DAD** |
| Expiration Date | **DBA** | **DBA** | **DBA** | **DBA** | **DBA** | **DBA** | **DBA** | **DBA** | **DBA** | **DBA** | **DBA** | **DBA** |
| Issue Date | **DBD** | **DBD** | **DBD** | **DBD** | **DBD** | **DBD** | **DBD** | **DBD** | **DBD** | **DBD** | **DBD** | **DBD** |
| Date of Birth | **DBB** | **DBB** | **DBB** | **DBB** | **DBB** | **DBB** | **DBB** | **DBB** | **DBB** | **DBB** | **DBB** | **DBB** |
| Gender | **DBC** | **DBC** | **DBC** | **DBC** | **DBC** | **DBC** | **DBC** | **DBC** | **DBC** | **DBC** | **DBC** | **DBC** |
| Eye Color | DAY | **DAY** | **DAY** | **DAY** | **DAY** | **DAY** | **DAY** | **DAY** | **DAY** | **DAY** | **DAY** | **DAY** |
| Height | DAU | **DAU** | **DAU** | **DAU** | **DAU** | **DAU** | **DAU** | **DAU** | **DAU** | **DAU** | **DAU** | **DAU** |
| Street Address | **DAG** | **DAG** | **DAG** | **DAG** | **DAG** | **DAG** | **DAG** | **DAG** | **DAG** | **DAG** | **DAG** | **DAG** |
| City | **DAI** | **DAI** | **DAI** | **DAI** | **DAI** | **DAI** | **DAI** | **DAI** | **DAI** | **DAI** | **DAI** | **DAI** |
| State | **DAJ** | **DAJ** | **DAJ** | **DAJ** | **DAJ** | **DAJ** | **DAJ** | **DAJ** | **DAJ** | **DAJ** | **DAJ** | **DAJ** |
| Postal Code | **DAK** | **DAK** | **DAK** | **DAK** | **DAK** | **DAK** | **DAK** | **DAK** | **DAK** | **DAK** | **DAK** | **DAK** |
| License ID | **DBJ** | **DAQ** | **DAQ** | **DAQ** | **DAQ** | **DAQ** | **DAQ** | **DAQ** | **DAQ** | **DAQ** | **DAQ** | **DAQ** |
| Document ID | `--` | **DCF** | **DCF** | **DCF** | **DCF** | **DCF** | **DCF** | **DCF** | **DCF** | **DCF** | **DCF** | **DCF** |
| Country | `--` | **DCG** | **DCG** | **DCG** | **DCG** | **DCG** | **DCG** | **DCG** | **DCG** | **DCG** | **DCG** | **DCG** |
| Weight | `--` | DAW | DAW | DAW | DAW | DAW | DAW | DAW | DAW | DAW | DAW | DAW |
| CDL Indicator | `--` | `--` | `--` | `--` | `--` | `--` | `--` | `--` | `--` | `--` | `--` | DDM |
| Non-Domiciled Indicator | `--` | `--` | `--` | `--` | `--` | `--` | `--` | `--` | `--` | `--` | `--` | DDN |
| Enhanced Credential | `--` | `--` | `--` | `--` | `--` | `--` | `--` | `--` | `--` | `--` | `--` | DDO |
| Permit Indicator | `--` | `--` | `--` | `--` | `--` | `--` | `--` | `--` | `--` | `--` | `--` | DDP |

## License

ISC

## Credits

Inspired by the Swift version at [ksoftllc/license-parser](https://github.com/ksoftllc/license-parser).
