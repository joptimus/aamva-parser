import { LicenseParser } from './classes/parser';
import { ParsedLicense } from './models/parsedLicense';

class Main {
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

export default Main;
