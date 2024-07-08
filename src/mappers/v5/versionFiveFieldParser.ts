import { FieldParser } from '../fieldParser';
import { VersionFiveFieldMapper } from './versionFiveFieldMapper';

export class VersionFiveFieldParser extends FieldParser {
  constructor(data: string) {
    super(data, new VersionFiveFieldMapper());
  }
}
