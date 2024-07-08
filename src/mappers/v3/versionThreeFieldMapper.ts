import { FieldMapper, FieldMapping } from '../fieldMapping';

export class VersionThreeFieldMapper implements FieldMapping {
  fields: { [key: string]: string } = {};

  constructor() {
    const fieldMapper = new FieldMapper();
    this.fields = { ...fieldMapper.fields }; // Copy fields from FieldMapper
    this.fields["firstName"] = "DCT";
  }

  fieldFor(key: string): string {
    return this.fields[key] || key;
  }
}
