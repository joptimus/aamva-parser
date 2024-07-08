export interface FieldMapping {
    fieldFor(key: string): string;
  }
  
  export class FieldMapper implements FieldMapping {
    fieldFor(key: string): string {
      // Implement your field mapping logic here
      // This is just a placeholder implementation
      return `mapped_${key}`;
    }
  }
  