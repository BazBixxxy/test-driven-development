const caesarCipher = require("../caesar_cipher");

test("returns an encrypted message based on the shift of the alphabet", () => {
  expect(caesarCipher("Hello World", 3)).toBe(`Khoor Zruog`);
});
