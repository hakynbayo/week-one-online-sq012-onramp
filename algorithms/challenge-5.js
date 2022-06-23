function filterList(arr) {
  return arr.filter((item) => typeof item === "number");
}
console.log  (filterList([1,2,'a','b']))
console.log (filterList([1,'a','b',0,15]))
console.log (filterList([1,2,'aasf','1','123',123]))

  module.exports =filterList