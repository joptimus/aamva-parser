import { FieldParser } from '../fieldParser';
import { VersionSixFieldMapper } from './versionSixFieldMapper';

export class VersionSixFieldParser extends FieldParser {
  constructor(data: string) {
    super(data, new VersionSixFieldMapper());
  }
}
