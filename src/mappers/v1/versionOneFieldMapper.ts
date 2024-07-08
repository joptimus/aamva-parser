import { FieldMapping } from '../fieldMapping';

export class VersionOneFieldMapper implements FieldMapping {
  private fields: { [key: string]: string } = {};

  constructor() {
    this.fields["customerId"] = "DBJ";
    this.fields["lastName"] = "DAB";
    this.fields["driverLicenseName"] = "DAA";
  }

  fieldFor(key: string): string {
    return this.fields[key] || key;
  }
}
