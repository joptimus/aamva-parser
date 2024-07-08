import { Regex } from '../src/utils/regex';

describe('Regex Utility', () => {
  it('should return the first match for a given pattern', () => {
    const regex = new Regex();
    const pattern = 'hello (\\w+)';
    const data = 'hello world';
    const result = regex.firstMatch(pattern, data);

    expect(result).toBe('world');
  });

  it('should return null if no match is found', () => {
    const regex = new Regex();
    const pattern = 'hello (\\d+)';
    const data = 'hello world';
    const result = regex.firstMatch(pattern, data);

    expect(result).toBeNull();
  });
});
