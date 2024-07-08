import { FieldMapping } from '../fieldMapping';

export class VersionTwoFieldMapper implements FieldMapping {
  private fields: { [key: string]: string } = {};

  constructor() {
    this.fields["firstName"] = "DCT";
  }

  fieldFor(key: string): string {
    return this.fields[key] || key;
  }
}
