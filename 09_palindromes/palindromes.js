const palindromes = function (string) {
  const reverse = string.filter((char) => (/[a-zA-Z]/).test(char))
  return reverse;
};

// Do not edit below this line
module.exports = palindromes;
