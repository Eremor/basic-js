const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    
    if(Array.isArray(arr)) {
      arr.forEach(item => {
        if(Array.isArray(item)) {
          let count = 1;
          count += this.calculateDepth(item)
          if(depth < count) {
            depth = count;
          }
        }
      })
    } else return 0

    return depth;
  }
};