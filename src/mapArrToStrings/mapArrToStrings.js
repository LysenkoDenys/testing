const mapArrToStrings = (arr) => {
  return arr.filter((item) => Number.isInteger(item)).map(String);
};

console.log(mapArrToStrings([1, 2, 3])); //

module.exports = mapArrToStrings;
