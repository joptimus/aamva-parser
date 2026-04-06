# Changelog

All notable changes to this project will be documented in this file.

## [1.6.0] - 2026-04-05

### Added

- **New helper functions** for common ID verification tasks:
  - `getAge(barcode)` - Returns age in years from date of birth
  - `isUnder21(barcode)` - Age verification for 21+ checks
  - `isUnder18(barcode)` - Age verification for 18+ checks
  - `isAcceptable(barcode)` - Validates license has all required fields and is not expired
  - `getFullName(barcode)` - Returns formatted "FIRST MIDDLE LAST" string
  - `getState(barcode)` - Returns state/jurisdiction code
  - `isCDL(barcode)` - Checks if license is a Commercial Driver's License (v12)
- **camelCase API** - All functions now available in standard JavaScript camelCase:
  - `parse()`, `getVersion()`, `isExpired()`

### Deprecated

- `Parse()` - Use `parse()` instead
- `GetVersion()` - Use `getVersion()` instead
- `IsExpired()` - Use `isExpired()` instead

## [1.5.0] - 2026-04-05

### Added

- **AAMVA v11 (CDS 2020)** support
- **AAMVA v12 (CDS 2025)** support with 4 new optional fields:
  - `cdlIndicator` (DDM) - Commercial Driver's License indicator
  - `nonDomiciledIndicator` (DDN) - Non-domiciled CDL/CLP indicator
  - `enhancedCredentialIndicator` (DDO) - Enhanced DL/ID indicator
  - `permitIndicator` (DDP) - Permit indicator
- v12 mapper correctly excludes alias fields removed in CDS 2025 (DBN, DBG, DBS)

## [1.4.1] - 2025-12-01

### Fixed

- Minor fixes and improvements

## [1.4.0] - 2025-12-01

### Changed

- Clean up codebase and fix build system
- Add TypeScript type exports
- Improve npm discoverability with additional keywords

## [1.3.2] - 2025-11-01

### Fixed

- Bug fixes and stability improvements
