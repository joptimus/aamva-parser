import { FieldMapper } from '../src/mappers/fieldMapping';

describe('FieldMapper', () => {
  it('should map fields correctly', () => {
    const fieldMapper = new FieldMapper();
    expect(fieldMapper.fieldFor('test')).toBe('mapped_test');
  });
});
