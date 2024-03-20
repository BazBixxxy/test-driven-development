const reverseString = require('../reverse_string');

test('returns the reverse of a string', () => {
  expect(reverseString("string")).toBe("gnirts");
})