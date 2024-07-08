import { LicenseParser } from './classes/parser';
import { ParsedLicense } from './parsedLicense';

class AAMVA {
  private data: string;
  private licenseParser: LicenseParser;

  constructor(data: string) {
    this.data = data;
    this.licenseParser = new LicenseParser(data);
  }

  parse(): ParsedLicense {
    return this.licenseParser.parse();
  }

  getVersion(): string | null {
    return this.licenseParser.parseVersion();
  }
}

export default AAMVA;
