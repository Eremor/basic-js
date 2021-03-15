const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let arr = [];
  let result = '';
  let addAddition = '';
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let addition = '';
  if(options.hasOwnProperty('addition')) addition = options.addition + '';
  let additionSeparator = options.additionSeparator ? options.additionSeparator + '' : '|';
  str = str + '';

  for(let i = 0 ; i < repeatTimes; i++) {
    arr.push(str)
  }

  for(let j = 0; j < additionRepeatTimes; j++) {
    for(let n = 0; n < arr.length; n++) {
      if(j < additionRepeatTimes - 1) {
        addAddition = `${addition}${additionSeparator}`
      } else {
        addAddition = addition;
      }
      arr[n] += addAddition
    }
  }
  
  if(repeatTimes  == 1) {
    result = arr.join('')
  } else {
    result = arr.join(separator)
  }

  return result
};
  