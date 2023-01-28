const repeatString = function (string, num) {
  let str = "";
  let i = 0;
  if (num < 0) {
    return "ERROR";
  } else {
    while (i < num) {
      str += string;
      i++;
    }
    return str;
  }
};
console.log(repeatString("hey", 0));
// Do not edit below this line
module.exports = repeatString;
