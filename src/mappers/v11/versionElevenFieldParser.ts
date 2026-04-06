import { FieldParser } from '../fieldParser';
import { VersionElevenFieldMapper } from './versionElevenFieldMapper';

export class VersionElevenFieldParser extends FieldParser {
  constructor(data: string) {
    super(data, new VersionElevenFieldMapper());
  }
}
