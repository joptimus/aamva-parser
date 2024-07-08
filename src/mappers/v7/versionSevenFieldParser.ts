import { FieldParser } from '../fieldParser';
import { VersionSevenFieldMapper } from './versionSevenFieldMapper';

export class VersionSevenFieldParser extends FieldParser {
  constructor(data: string) {
    super(data, new VersionSevenFieldMapper());
  }
}
