const removeFromArray = (arr, ...val) => {
  let y = val;
  return arr.filter((x) => !y.includes(x));
};
// Do not edit below this line
module.exports = removeFromArray;
