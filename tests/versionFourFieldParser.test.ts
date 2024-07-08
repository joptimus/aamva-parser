import { VersionFourFieldParser } from '../src/mappers/v4/versionFourFieldParser';

describe('VersionFourFieldParser', () => {
  const data = 'some raw data adhering to VersionFour format';
  const parser = new VersionFourFieldParser(data);

  it('should parse first name correctly', () => {
    const result = parser.parseFirstName();
    expect(result).toBe('expected first name'); // Adjust based on your logic
  });

  // Add more tests for other methods as needed
});
