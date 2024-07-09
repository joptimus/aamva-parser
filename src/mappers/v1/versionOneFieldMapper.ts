import { FieldMapper, FieldMapping } from "../fieldMapping";

export class VersionOneFieldMapper implements FieldMapping {
  fields: { [key: string]: string } = {};

  constructor() {
    const fieldMapper = new FieldMapper();
    this.fields = { ...fieldMapper.fields }; // Copy fields from FieldMapper
    this.fields["driversLicenseId"] = "DBJ";
    this.fields["lastName"] = "DAB";
    this.fields["driverLicenseName"] = "DAA";
  }

  fieldFor(key: string): string {
    return this.fields[key] || key;
  }
}
