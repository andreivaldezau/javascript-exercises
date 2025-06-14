// Use arithmetic progression formula
const sumAll = function (a, b) {
  if (a > 0 && b > 0 && Number.isInteger(a) && Number.isInteger(b)) {
    return ((Math.abs(a - b) + 1) * (a + b)) / 2;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
