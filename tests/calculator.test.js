const calculator = require("../calculator");

test("returns the required calculations of the parameters", () => {
  expect(calculator.add(2, 5)).toBe(7);
  expect(calculator.subtract(5, 2)).toBe(3);
  expect(calculator.multiply(4, 5)).toBe(20);
  expect(calculator.divide(20, 10)).toBe(2);
});
