import { FieldParser } from '../src/mappers/fieldParser';
import { FieldMapper } from '../src/mappers/fieldMapping';

describe('FieldParser', () => {
  const data = 'some raw data';
  const fieldMapper = new FieldMapper();
  const parser = new FieldParser(data, fieldMapper);

  it('should parse strings correctly', () => {
    const result = parser.parseString('test');
    expect(result).toBe('expected result'); // Adjust based on your logic
  });

  it('should parse doubles correctly', () => {
    const result = parser.parseDouble('test');
    expect(result).toBe(123.45); // Adjust based on your logic
  });

  // Add more tests for other methods
});
