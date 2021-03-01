const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== 'string' || sampleActivity < 0 || sampleActivity > MODERN_ACTIVITY || sampleActivity != Number(sampleActivity)) return false;
  
  let k = 0.693/HALF_LIFE_PERIOD;
  let log = Math.log(MODERN_ACTIVITY/sampleActivity)
  let t = Math.ceil(log/k)

  return (t == Infinity || t == NaN || t == undefined) ? false : t
};
