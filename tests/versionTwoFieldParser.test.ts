import { VersionTwoFieldParser } from '../src/mappers/v2/versionTwoFieldParser';

describe('VersionTwoFieldParser', () => {
  const data = 'some raw data adhering to VersionTwo format';
  const parser = new VersionTwoFieldParser(data);

  it('should parse first name correctly', () => {
    const result = parser.parseFirstName();
    expect(result).toBe('expected first name'); // Adjust based on your logic
  });

  // Add more tests for other methods as needed
});
