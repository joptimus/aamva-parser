// Define the FieldMapping interface
export interface FieldMapping {
  // A list of AAMVA field designator mappings (e.g. "firstName" => "DAC")
  fields: { [key: string]: string };

  /**
   * Determine the AAMVA field designator for a particular human-readable key.
   * 
   * @param key - The human-readable key
   * @returns The AAMVA field designator
   */
  fieldFor(key: string): string;
}

// Standard FieldMapping implementation based on the AAMVA Version 8 standard
export class FieldMapper implements FieldMapping {
  // A list of AAMVA field designator mappings (e.g. "firstName" => "DAC")
  public fields: { [key: string]: string } = {
      "firstName": "DAC",
      "lastName": "DCS",
      "middleName": "DAD",
      "expirationDate": "DBA",
      "issueDate": "DBD",
      "dateOfBirth": "DBB",
      "gender": "DBC",
      "eyeColor": "DAY",
      "height": "DAU",
      "streetAddress": "DAG",
      "city": "DAI",
      "state": "DAJ",
      "postalCode": "DAK",
      "customerId": "DAQ",
      "documentId": "DCF",
      "country": "DCG",
      "middleNameTruncation": "DDG",
      "firstNameTruncation": "DDF",
      "lastNameTruncation": "DDE",
      "streetAddressSupplement": "DAH",
      "hairColor": "DAZ",
      "placeOfBirth": "DCI",
      "auditInformation": "DCJ",
      "inventoryControlNumber": "DCK",
      "lastNameAlias": "DBN",
      "firstNameAlias": "DBG",
      "suffixAlias": "DBS",
      "suffix": "DCU"
  };

  /**
   * Determine the AAMVA field designator for a particular human-readable key.
   * 
   * @param key - The human-readable key
   * @returns The AAMVA field designator
   */
  public fieldFor(key: string): string {
      return this.fields[key] || "";
  }
}
