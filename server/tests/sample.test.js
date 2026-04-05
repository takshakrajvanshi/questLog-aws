/**
 * Sample Test Cases for QuestLog Server
 * Basic test suite with 5 fundamental tests
 */

describe('Basic Tests', () => {
  // Test 1: Arithmetic
  test('should add two numbers correctly', () => {
    const result = 2 + 2;
    expect(result).toBe(4);
  });

  // Test 2: String operations
  test('should convert string to uppercase', () => {
    const result = 'hello'.toUpperCase();
    expect(result).toBe('HELLO');
  });

  // Test 3: Array operations
  test('should filter array elements', () => {
    const arr = [1, 2, 3, 4, 5];
    const filtered = arr.filter(num => num > 2);
    expect(filtered).toEqual([3, 4, 5]);
  });

  // Test 4: Object properties
  test('should create and access object properties', () => {
    const game = { id: 1, name: 'Test Game', price: 29.99 };
    expect(game.name).toBe('Test Game');
    expect(game.price).toBe(29.99);
  });

  // Test 5: Email validation
  test('should validate email format', () => {
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('invalid-email')).toBe(false);
  });
});