import { LicenseParser } from './classes/parser';
import { ParsedLicense } from './models/parsedLicense';

class AAMVA {
  private data: string;
  private licenseParser: LicenseParser;

  constructor(data: string) {
    this.data = data;
    this.licenseParser = new LicenseParser(data);
  }

  parse(data?): ParsedLicense {
    return this.licenseParser.parse(data);
  }

  getVersion(): string | null {
    return this.licenseParser.parseVersion();
  }
}

export default AAMVA;
