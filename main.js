//Count of each  Alpha nemeric character in a string

const charcount = (str) => {
  let result = {};

  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      result[char] = (result[char] || 0) + 1;
    }
  }

  return result;
};

charcount("hello %%%% WE");

//Method 2: Refactoring

/*
const charcount2 = (str) => {

    let result = {};

    for(let char of str){
        
        if(isAlphanumeric(char)){
            if(result[char]){
            result[char]++
        }else {
            result[char] = 1;
        }
        }
    }

    return result;
}


const isAlphanumeric = (char) => {
  let code = char.charCodeAt(0);

    if( !(code < 47 && code >  58) &&
        !(code < 64 && code > 91) &&
        !(code < 96 && code > 123)){

      return false
    } 
    return true
}


charcount2('hellow @@####')
*/

//FREQUENCY COUNTER APPROACH TO PROBLEM SOLVING

//Q1: return true if second array is the square of the first

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = ++frequencyCounter1[val] || 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = ++frequencyCounter2[val] || 1;
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
};

console.log(same([1, 2, 3], [1, 4, 9]));

//Q2

//write a function that returns true if second string is the anagram of the first.

const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let char of str1) {
    frequencyCounter1[char] = ++frequencyCounter1[char] || 1;
  }
  for (let char of str2) {
    frequencyCounter2[char] = ++frequencyCounter2[char] || 1;
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    // if(frequencyCounter2[key] !== frequencyCounter1[key]){
    //     return false
    // }
  }

  return true;
};
isAnagram("rat", "car");
console.log(isAnagram("rate", "rate"));

//Alternative solution

const isValidAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  let lookup = {};
  for (let char of str1) {
    lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);
    //lookup[char] = ++lookup[char] || 1
  }
  console.log(lookup);

  for (let char of str2) {
    if (!lookup[char]) {
      return false;
    } else {
      lookup[char] -= 1;
    }
  }

  return true;
};

const result = isValidAnagram("anagram", "nagrama");
console.log(result);

//EXERCISE : return true if numbers have same digit frequency

const sameFrequency = (n1, n2) => {
  let str1 = n1.toString();
  let str2 = n2.toString();

  let frequency = {};
  for (let char of str1) {
    frequency[char] ? (frequency[char] += 1) : (frequency[char] = 1);
  }
  console.log(frequency);
  for (let char of str2) {
    if (!frequency[char]) {
      return false;
    } else {
      frequency[char]--;
    }
  }

  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false

//EXERCISE 2
//Multipointer Approach
const areThereDuplicates = (...args) => {
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
};
console.log(areThereDuplicates(1, 2, 3, 3)); // true
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true

//FREQUENCY COUNTER APPROACH
function areThereDuplicates2() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

console.log(areThereDuplicates2(1, 2, 3, 3)); // true
console.log(areThereDuplicates2(1, 2, 2)); // true
console.log(areThereDuplicates2("a", "b", "c", "a")); // true
