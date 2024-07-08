import { FieldParser } from '../fieldParser';
import { VersionTenFieldMapper } from './versionTenFieldMapper';

export class VersionTenFieldParser extends FieldParser {
  constructor(data: string) {
    super(data, new VersionTenFieldMapper());
  }
}
