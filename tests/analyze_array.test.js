const analyzeArray = require("../analyze_array");

test('function analyzes an array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
})

// in this scenario we use toEqual to test