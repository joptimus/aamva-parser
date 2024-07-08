import { FieldParser } from '../fieldParser';
import { VersionNineFieldMapper } from './versionNineFieldMapper';

export class VersionNineFieldParser extends FieldParser {
  constructor(data: string) {
    super(data, new VersionNineFieldMapper());
  }
}
