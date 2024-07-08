import { FieldMapping } from '../fieldMapping';

export class VersionNineFieldMapper implements FieldMapping {
  fields: { [key: string]: string } = {};

  constructor() {
    // Initialize fields if needed
  }

  fieldFor(key: string): string {
    return this.fields[key] || key;
  }
}
