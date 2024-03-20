const capitalize = require("../capitalize");

test("returns the string in upper_case", () => {
  expect(capitalize("string")).toBe("STRING");
});
