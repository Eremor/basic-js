const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new CustomError('Not implemented');
  
  let step = Math.pow(2, disksNumber) - 1;
  let sec = Math.floor((step*3600) / turnsSpeed);

  return {turns: step, seconds: sec}
}
