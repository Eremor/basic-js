const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let sortItem = [];
  let dreamTeam = '';

  if(!Array.isArray(members)) return false;

  members.forEach(member => {
    if(typeof member === 'string') {
      sortItem.push(member.trim().toUpperCase()[0])
    }
  })
  
  sortItem.sort().forEach(item => dreamTeam += item)
  return dreamTeam
};
