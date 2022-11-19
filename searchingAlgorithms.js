const linearSearch = (arr, val) => {
  const isAvailable = arr.indexOf(val);
  //console.log(isAvailable)
  return isAvailable >= 0 ? isAvailable : -1;
};

console.log(linearSearch([1, 2, 3, 4], 3));
console.log(linearSearch([1, 2, 3, 4], -2));
console.log(linearSearch([100], 100));

const binarySearch = (arr, elem) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (elem !== arr[middle] && start <= end) {
    if (elem > arr[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === elem ? middle : -1;
};

console.log(binarySearch([1, 2, 3, 4, 5], 7));

const naiveSearch = (long, short) => {
  const count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
};
