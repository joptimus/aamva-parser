import { VersionSixFieldParser } from '../src/mappers/v6/versionSixFieldParser';

describe('VersionSixFieldParser', () => {
  const data = 'some raw data adhering to VersionSix format';
  const parser = new VersionSixFieldParser(data);

  it('should parse first name correctly', () => {
    const result = parser.parseFirstName();
    expect(result).toBe('expected first name'); // Adjust based on your logic
  });

  // Add more tests for other methods as needed
});
