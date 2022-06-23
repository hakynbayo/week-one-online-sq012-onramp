function secondLargest(arr) {
  let largestNumber = arr[0];
  let secondLargestNumber = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      secondLargestNumber = largestNumber;
      largestNumber = arr[i];
    } else if (arr[i] > secondLargestNumber) {
      secondLargestNumber = arr[i];
    }
  }
  return secondLargestNumber;
}

console.log(secondLargest([6, 3, 0, 30, 7]));
console.log(secondLargest([71, 33, 3, 51, 18, 6]));
console.log(secondLargest([42, 68, 22, 60, 7]));

module.exports = secondLargest;
