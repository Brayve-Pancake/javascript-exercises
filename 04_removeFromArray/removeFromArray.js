const removeFromArray = function() {
  let array = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    if (array.includes(arguments[i])) {
      let elementIndex = array.indexOf(arguments[i]);
      array.splice(elementIndex, 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
