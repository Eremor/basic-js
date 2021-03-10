const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  if(!Array.isArray(arr)) throw new Error();

  let count = 0;
  let result = [];
  let arr2 = [];
  arr2 = arr.slice()

  arr.forEach(item => {
    if(item == '--discard-prev' || item == '--double-prev' || item == '--double-next' || item == '--discard-next') {
      count++;
    }
  })
  
  if(count == 0) return arr;
  
  for(let i = 0; i < arr2.length; i++) {
    if(arr2[i] == '--discard-prev' && i == 0) {
      arr2[0] = '++';
    } else if(arr2[i] == '--double-prev' && i == 0) {
      arr2[0] = '++';
    } else if(arr2[i] == '--double-next' && i == arr2.length - 1) {
      arr2[arr2.length - 1] = '++';
    } else if(arr2[i] == '--discard-next' && i == arr2.length - 1) {
      arr2[arr2.length - 1] = '++';
    } else if(arr2[i] == '--discard-prev' && i != 0) {
      arr2[i] = '++';
      arr2[i-1] = '++';
      i = 0;
    } else if(arr2[i] == '--double-prev' && i != 0) {
      arr2[i] = arr2[i - 1];
      i = 0;
    } else if(arr2[i] == '--double-next' && i != arr2.length - 1) {
      arr2[i] = arr2[i + 1];
      i = 0;
    } else if(arr2[i] == '--discard-next' && i != arr2.length - 1) {
      arr2[i] = '++';
      arr2[i + 1] = '++';
      i = 0;
    }
  }

  arr2.forEach(item => {
    if(item != '++') {
      result.push(item)
    }
  })

  return result;
};
