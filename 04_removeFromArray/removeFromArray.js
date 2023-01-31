const removeFromArray = (arr, ...val) => {
  console.log(val);
  return arr.filter((item) => item !== val);
};
console.log(removeFromArray([1, 2, 3, 4], 3, 4));
// Do not edit below this line
module.exports = removeFromArray;
