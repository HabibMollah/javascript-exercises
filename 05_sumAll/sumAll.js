const sumAll = function (startNum, endNum) {
  let sum = 0;
  //check for non-number parameters
  if (typeof startNum !== typeof 1 || typeof endNum !== typeof 1) {
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
console.log(sumAll(4, "sjh"));

// Do not edit below this line
module.exports = sumAll;
