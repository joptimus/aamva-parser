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
  }

  fieldFor(key: string): string {
    return this.fields[key] || key;
  }
}
