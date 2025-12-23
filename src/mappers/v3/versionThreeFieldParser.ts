import { FieldParser } from '../fieldParser';
import { VersionThreeFieldMapper } from './versionThreeFieldMapper';

export class VersionThreeFieldParser extends FieldParser {
  constructor(data: string) {
    super(data, new VersionThreeFieldMapper());
  }
}
