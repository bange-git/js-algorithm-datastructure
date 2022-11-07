//sum from n to 0;
function recursiveRange(n) {
  if (n === 1) return 1;
  return n + recursiveRange(n - 1);
}

// productOfArray([1,2,3,10]) // 60
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3, 4]));

//Fib sequence
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(9));

const reverse = (str) => {
  if (str.length <= 1) return str;
  //return reverse(str.slice(1)) + str[0];
  return reverse(str.substring(1)) + str[0];
};
console.log(reverse("awesome"));

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
}

function flatten(oldArr) {
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}
