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

const result = sumZero([-3, -2, -1, 0, 4, 3, 4]);
console.log(result);

//q2 Two pointer starting at index o and 1: count unique values in the array

const countUniqueValues = (arr) => {
  if (arr.length == 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};
console.log(countUniqueValues([1, 2, 3, 3, 4]));

//Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

const averagePair = (arr, num) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let avr = (arr[start] + arr[end]) / 2;
    if (avr == num) {
      return true;
    } else if (avr > num) {
      end--;
    } else {
      start++;
    }
  }
  return false;
};

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false

//Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

const isSubsequence = (str1, str2) => {
 let i  = 0;
 let j = 0;
 if(!str1) return true;
 while( j < str2.length){
    if(str2[j] == str1[i]) i++;
    if(i === str1.length) return true;
    j++;
 }
 return false
}
console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'abc')); // false (order matters)
