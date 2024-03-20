const calculator = (function () {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;
  return { add, subtract, multiply, divide };
})();

console.log(calculator.add(4, 5));
console.log(calculator.subtract(4, 5));
console.log(calculator.multiply(4, 5));
console.log(calculator.divide(4, 5));

module.exports = calculator;