import { FieldParser } from '../fieldParser';
import { VersionTwoFieldMapper } from './versionTwoFieldMapper';

export class VersionTwoFieldParser extends FieldParser {
  constructor(data: string) {
    super(data, new VersionTwoFieldMapper());
  }
}
