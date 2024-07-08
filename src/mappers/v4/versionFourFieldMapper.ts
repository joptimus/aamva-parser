import { FieldMapping } from '../fieldMapping';

export class VersionFourFieldMapper implements FieldMapping {
  private fields: { [key: string]: string } = {};

  constructor() {
    // Initialize fields if needed
  }

  fieldFor(key: string): string {
    return this.fields[key] || key;
  }
}
