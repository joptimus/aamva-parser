import { FieldParser } from '../fieldParser';
import { VersionEightFieldMapper } from './versionEightFieldMapper';

export class VersionEightFieldParser extends FieldParser {
  constructor(data: string) {
    super(data, new VersionEightFieldMapper());
  }
}
