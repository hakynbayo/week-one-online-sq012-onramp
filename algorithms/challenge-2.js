function filterArray(arr) {
  return arr.filter((item) => typeof item === "number");
}
console.log(filterArray([1, 3, "boy", 5, "girl"]));

module.exports = filterArray;
