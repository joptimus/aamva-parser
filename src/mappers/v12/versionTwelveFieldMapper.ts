import { FieldMapper, FieldMapping } from '../fieldMapping';

export class VersionTwelveFieldMapper implements FieldMapping {
  fields: { [key: string]: string } = {};

  constructor() {
    const fieldMapper = new FieldMapper();
    this.fields = {
      ...fieldMapper.fields,
      cdlIndicator: "DDM",
      nonDomiciledIndicator: "DDN",
      enhancedCredentialIndicator: "DDO",
      permitIndicator: "DDP",
    };
    // CDS 2025 removes these fields from the barcode
    delete this.fields['lastNameAlias'];
    delete this.fields['firstNameAlias'];
    delete this.fields['suffixAlias'];
  }

  fieldFor(key: string): string {
    return this.fields[key] || key;
  }
}
