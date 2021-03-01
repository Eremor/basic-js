const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // throw new CustomError('Not implemented');
  if(matrix === undefined) throw 'Not implemented';
  let count = 0;
  
  matrix.flat().forEach(item => {
    if(item === '^^') count++
  })

  return count
};
