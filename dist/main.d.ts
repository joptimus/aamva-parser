import { ParsedLicense } from './models/parsedLicense';
declare class AAMVA {
    private data;
    private licenseParser;
    constructor(data: string);
    parse(data?: any): ParsedLicense;
    getVersion(): string | null;
}
export default AAMVA;
