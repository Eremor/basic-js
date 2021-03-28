const CustomError = require("../extensions/custom-error");

let alphabet = "abcdefghijklmnopqrstuvwxyz";
class VigenereCipheringMachine {

  constructor(mode = true) {
    this.mode = mode
  }

  encrypt(phrase, key) {
    if(typeof phrase != 'string' || typeof key != 'string') throw new Error();

    let encryptWord = '';
    let k = 0;
    let index;

    for(let i = 0; i < phrase.length; i++) {      
      let indexPhrase = alphabet.indexOf(phrase[i].toLowerCase())
      let indexKey = alphabet.indexOf(key[k].toLowerCase())

      if(indexPhrase === -1) {
        encryptWord += phrase[i]
      } else {
        index = indexPhrase + indexKey

        if(index >= 26 ) index = index % 26
        
        encryptWord += alphabet[index]
        
        if(k == key.length - 1) {
          k = 0
        } else {
          k++
        }
      }
    }

    return this.mode ? encryptWord.toUpperCase() : encryptWord.split('').reverse().join('').toUpperCase()
  }

  decrypt(cipher, key) {
    if(typeof cipher != 'string' || typeof key != 'string') throw new Error();

    let decryptWord = '';
    let k = 0;
    let index;

    for(let i = 0; i < cipher.length; i++) {
      let indexCipher = alphabet.indexOf(cipher[i].toLowerCase())
      let indexKey = alphabet.indexOf(key[k].toLowerCase())

      if(indexCipher === -1) {
        decryptWord += cipher[i]
      } else {
        index = indexCipher - indexKey + 26

        if(index >= 26 ) index = index % 26
        
        decryptWord += alphabet[index]
        
        if(k == key.length - 1) {
          k = 0
        } else {
          k++
        }
      }
    }
    
    return this.mode ? decryptWord.toUpperCase() : decryptWord.split('').reverse().join('').toUpperCase()
  }
}

module.exports = VigenereCipheringMachine;
