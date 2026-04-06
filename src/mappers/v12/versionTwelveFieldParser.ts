import { FieldParser } from '../fieldParser';
import { VersionTwelveFieldMapper } from './versionTwelveFieldMapper';

export class VersionTwelveFieldParser extends FieldParser {
  constructor(data: string) {
    super(data, new VersionTwelveFieldMapper());
  }
}
