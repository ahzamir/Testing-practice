function stringLength(string) {
  let count = string.length;
  if (count < 1 || count > 10) {
    return ('please check ypur string first');
  } else {
    return count;
  };
};

function reverseString(string) {
  let splitString = string.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}

function capitalizeString(string) {
  let capitalizeString = string.charAt(0).toUpperCase() + string.slice(1);
  return capitalizeString;
}

const calculators = {
  numAdd: add,
  numSubstract: substract,
  numMultiply: multiply,
  numDided: divid,
}
function add(a, b) {
  let num = (a + b);
  return num;
}
function substract(a, b) {
  let num = (a - b);
  return num;
}
function multiply(a, b) {
  let num = (a, b);
  num = (a * b);
  return num;
}
function divid(a, b) {
  let num = (a, b);
  num = (a / b);
  return num;
}

module.exports = { stringLength, reverseString, calculators, capitalizeString }