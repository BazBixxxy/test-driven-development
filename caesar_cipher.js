function caesarCipher(string, shift) {
  let encryptedMessage = "";

  for (let i = 0; i < string.length; i++) {
    let character = string[i];

    if (character.match(/[a-z]/i)) {
      const code_key = string.charCodeAt(i);
      if (code_key >= 65 && code_key <= 90) {
        // for lower case words
        character = String.fromCharCode(((code_key - 65 + shift) % 26) + 65);
      } else if (code_key >= 97 && code_key <= 122) {
        // for upper case words
        character = String.fromCharCode(((code_key - 97 + shift) % 26) + 97);
      }
    }

    encryptedMessage += character;
  }

  return encryptedMessage;
}

console.log(caesarCipher("Hello World", 3));


module.exports = caesarCipher;

let thisString = `hello`;
let caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let encryption = "";
for (let i = 0; i < thisString.length; i++) {
  let char = thisString[i];
  const code = thisString.charCodeAt(i);
  // console.log(code);
  char = String.fromCharCode(((code - 97 + 3) % 26) + 97); // to encrypt lower-case alphabet keys, we subtract 97 from their codes and add the shift in case 97 and find the modulo in order to keep them in range then add 97 to return the encrypted key
  // console.log(char);
  encryption += char;
}
console.log(encryption);

let Encryption = "";
for (let i = 0; i < caps.length; i++) {
  let cap = caps[i];
  const code = caps.charCodeAt(i);
  cap = String.fromCharCode(((code - 65 + 3) % 26) + 65);
  // console.log(cap);
  Encryption += cap;
}
// console.log(Encryption);
