const add = function() {
  let a = arguments[0];
  let b = arguments[1];
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {

	return array.reduce(add, 0);
};

const multiply = function(array) {

  return array.reduce((a, b) => {
    return a * b;
  }, 1);
};

const power = function(a, b) {
  return Math.pow(a,b);
};

const factorial = function() {

	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
