import { FieldMapper, FieldMapping } from '../fieldMapping';

export class VersionElevenFieldMapper implements FieldMapping {
  fields: { [key: string]: string } = {};

  constructor() {
    const fieldMapper = new FieldMapper();
    this.fields = { ...fieldMapper.fields };
  }

  fieldFor(key: string): string {
    return this.fields[key] || key;
  }
}
