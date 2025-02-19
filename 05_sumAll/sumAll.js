const sumAll = function (startNum, endNum) {
  let sum = 0;
  //check for non-number parameters
  if (!Number.isInteger(startNum) || !Number.isInteger(endNum)) {
    sum = "ERROR";
  } else if (endNum < startNum) {
    while (endNum <= startNum) {
      sum += endNum;
      endNum++;
    }
  } else if (startNum < 0 || endNum < 0) {
    sum = "ERROR";
  } else {
    while (startNum <= endNum) {
      sum += startNum;
      startNum++;
    }
  }
  return sum;
};
console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
