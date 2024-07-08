import { VersionOneFieldParser } from '../src/mappers/v1/versionOneFieldParser';

describe('VersionOneFieldParser', () => {
  const data = 'some raw data adhering to VersionOne format';
  const parser = new VersionOneFieldParser(data);

  it('should parse first name correctly', () => {
    const result = parser.parseFirstName();
    expect(result).toBe('expected first name'); // Adjust based on your logic
  });

  it('should parse last name correctly', () => {
    const result = parser.parseLastName();
    expect(result).toBe('expected last name'); // Adjust based on your logic
  });

  it('should parse height correctly', () => {
    const result = parser.parseHeight();
    expect(result).toBe(68); // Adjust based on your logic
  });

  // Add more tests for other methods
});
