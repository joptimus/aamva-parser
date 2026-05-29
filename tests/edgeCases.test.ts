import { parse, getVersion, isExpired, getAge, getFullName, getState, isAcceptable } from '../src/index';
import { FieldParser } from '../src/mappers/fieldParser';
import { FieldMapper } from '../src/mappers/fieldMapping';

describe('Edge cases and malformed input', () => {
  describe('empty and garbage input', () => {
    it('should handle empty string', () => {
      const result = parse('');
      expect(result.firstName).toBeNull();
      expect(result.lastName).toBeNull();
      expect(result.dateOfBirth).toBeNull();
    });

    it('should handle garbage data', () => {
      const result = parse('this is not a barcode at all');
      expect(result.firstName).toBeNull();
      expect(result.lastName).toBeNull();
    });

    it('should return null version for garbage data', () => {
      expect(getVersion('random garbage')).toBeNull();
    });

    it('should return null age for empty barcode', () => {
      expect(getAge('')).toBeNull();
    });

    it('should return null full name for empty barcode', () => {
      expect(getFullName('')).toBeNull();
    });

    it('should return null state for empty barcode', () => {
      expect(getState('')).toBeNull();
    });

    it('should return false for isAcceptable on empty barcode', () => {
      expect(isAcceptable('')).toBe(false);
    });
  });

  describe('truncated barcode', () => {
    it('should handle barcode with header only', () => {
      const headerOnly = `@\nANSI 636026080102DL00410288ZA03290015DL`;
      const result = parse(headerOnly);
      expect(result.firstName).toBeNull();
      expect(result.version).toBe('08');
    });

    it('should handle barcode with partial fields', () => {
      const partial = `@\nANSI 636026080102DL00410288ZA03290015DL\nDACJOHN`;
      const result = parse(partial);
      expect(result.firstName).toBe('JOHN');
      expect(result.lastName).toBeNull();
    });
  });

  describe('FieldParser date edge cases', () => {
    const fieldMapper = new FieldMapper();

    it('should return null for date string shorter than 8 characters', () => {
      const parser = new FieldParser('DBB0131\n', fieldMapper);
      expect(parser.parseDateOfBirth()).toBeNull();
    });

    it('should return null for date string longer than 8 characters', () => {
      const parser = new FieldParser('DBB013119701\n', fieldMapper);
      expect(parser.parseDateOfBirth()).toBeNull();
    });

    it('should return null when no date field exists', () => {
      const parser = new FieldParser('no date here', fieldMapper);
      expect(parser.parseDateOfBirth()).toBeNull();
      expect(parser.parseExpirationDate()).toBeNull();
      expect(parser.parseIssueDate()).toBeNull();
    });
  });

  describe('FieldParser with missing fields', () => {
    const fieldMapper = new FieldMapper();
    const parser = new FieldParser('', fieldMapper);

    it('should return null for parseString on empty data', () => {
      expect(parser.parseString('firstName')).toBeNull();
    });

    it('should return null for parseDouble on empty data', () => {
      expect(parser.parseDouble('height')).toBeNull();
    });

    it('should return null for parseHeight on empty data', () => {
      expect(parser.parseHeight()).toBeNull();
    });

    it('should return default enum values for missing fields', () => {
      expect(parser.parseGender()).toBe('Other');
      expect(parser.parseEyeColor()).toBe('Unknown');
      expect(parser.parseHairColor()).toBe('Unknown');
      expect(parser.parseCountry()).toBe('Unknown');
      expect(parser.parseNameSuffix()).toBe('Unknown');
    });

    it('should return false for parseIsExpired with no expiration date', () => {
      expect(parser.parseIsExpired()).toBe(false);
    });
  });

  describe('Regex edge cases', () => {
    const { Regex } = require('../src/utils/regex');
    const regex = new Regex();

    it('should handle pattern with no capture group match', () => {
      expect(regex.firstMatch('(\\d+)', 'no digits here')).toBeNull();
    });

    it('should trim whitespace from matches', () => {
      const result = regex.firstMatch('DAC(.+)\\b', 'DAC JOHN ');
      expect(result).not.toBeNull();
    });

    it('should be case-insensitive', () => {
      const result = regex.firstMatch('hello (\\w+)', 'HELLO WORLD');
      expect(result).toBe('WORLD');
    });
  });
});
