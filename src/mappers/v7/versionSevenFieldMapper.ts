import { FieldMapper, FieldMapping } from '../fieldMapping';

export class VersionSevenFieldMapper implements FieldMapping {
  fields: { [key: string]: string } = {};

  constructor() {
    const fieldMapper = new FieldMapper();
    this.fields = { ...fieldMapper.fields }; // Copy fields from FieldMapper
  }

  fieldFor(key: string): string {
    return this.fields[key] || key;
  }
}
