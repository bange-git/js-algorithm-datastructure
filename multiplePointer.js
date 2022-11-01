//Find all pairs that sums to zero of an array using multiple   pointer  pattern

const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum == 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

const result = sumZero([-3, -2, -1, 0, 4, 7, 4]);
console.log(result);

//q2 Two pointer starting at index o and 1: count unique values in the array

const countUniqueValues = (arr) => {
    if(arr.length == 0) return 0;
    let i = 0;
   for(let j = 1; j < arr.length; j++){
     if(arr[i] !== arr[j]){
        i++;
        arr[i] = arr[j];
     }
    }
    return i + 1;
}
console.log(countUniqueValues([1,2,3,3,4]));
