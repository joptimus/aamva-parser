import { FieldParser } from '../fieldParser';
import { VersionFourFieldMapper } from './versionFourFieldMapper';

export class VersionFourFieldParser extends FieldParser {
  constructor(data: string) {
    super(data, new VersionFourFieldMapper());
  }
}
