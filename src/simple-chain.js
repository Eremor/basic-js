const CustomError = require("../extensions/custom-error");

let arr = [];

const chainMaker = {
  getLength() {
    return arr.length;
  },
  addLink(value) {
    if(value === undefined) value = '';
    arr.push(`( ${value} )~~`)
    return this
  },
  removeLink(position) {
    if(position <= 0 || position > arr.length || typeof position != 'number') {
      arr = [];
      throw new Error()
    }
    arr.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    arr.reverse()
    return this
  },
  finishChain() {
    let result = arr.join('').slice(0, -2)
    arr = [];
    return result
  }
};

module.exports = chainMaker;
