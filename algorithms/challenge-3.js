function sumMix(arr) {
  let sum = arr.filter((item) => typeof item === "number");

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    sum += arr[i];
  }
  return sum;
}

console.log(sumMix([9, 3, "7", "3"]));
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));
module.exports = sumMix;
