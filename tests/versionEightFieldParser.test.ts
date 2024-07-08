import { VersionEightFieldParser } from '../src/mappers/v8/versionEightFieldParser';

describe('VersionEightFieldParser', () => {
  const data = 'some raw data adhering to VersionEight format';
  const parser = new VersionEightFieldParser(data);

  it('should parse first name correctly', () => {
    const result = parser.parseFirstName();
    expect(result).toBe('expected first name'); // Adjust based on your logic
  });

  // Add more tests for other methods as needed
});
