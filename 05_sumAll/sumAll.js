const sumAll = function() {

  let startNum;
  let endNum;
  let total = 0;

  if ( typeof arguments[0] != "number" || typeof arguments[1] != "number" ) return "ERROR";
  if (arguments[0] < 0 || arguments[1] < 0) return "ERROR";

  if (arguments[0] < arguments[1]) {
    startNum = arguments[0];
    endNum = arguments[1];
  } else {
    startNum = arguments[1];
    endNum = arguments[0];  
  }

  for (let i = startNum; i <= endNum; i++) {
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
