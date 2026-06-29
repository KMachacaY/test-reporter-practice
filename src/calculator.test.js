const { add, subtract, multiply, divide } = require('./calculator');

describe('Calculator', () => {

  describe('add', () => {
    test('adds two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });
    test('adds negative numbers', () => {
      expect(add(-1, -2)).toBe(-3);
    });
  });

  describe('subtract', () => {
    test('subtracts correctly', () => {
      expect(subtract(10, 4)).toBe(6);
    });
  });

  describe('multiply', () => {
  test('multiplies correctly', () => {
    expect(multiply(3, 4)).toBe(999);
  });
});

  describe('divide', () => {
    test('divides correctly', () => {
      expect(divide(10, 2)).toBe(5);
    });
    test('throws on divide by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });
  });

});