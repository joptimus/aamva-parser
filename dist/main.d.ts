import { ParsedLicense } from './models/parsedLicense';
declare class Main {
    private data;
    private licenseParser;
    constructor(data: string);
    parse(): ParsedLicense;
    getVersion(): string | null;
}
export default Main;
