import { FieldMapping } from '../fieldMapping';

export class VersionThreeFieldMapper implements FieldMapping {
  fields: { [key: string]: string } = {};

  constructor() {
    this.fields["firstName"] = "DCT";
  }

  fieldFor(key: string): string {
    return this.fields[key] || key;
  }
}
