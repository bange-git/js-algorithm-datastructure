
//Count of each  Alpha nemeric character in a string

const charcount = (str) => {

    let result = {};

    for(let char of str){
    char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)){
            result[char] = (result[char] || 0) + 1;

        }
    }

    return result;
}

charcount('hello %%%% WE');


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

    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of arr1){
        frequencyCounter1[val] = ++frequencyCounter1[val] || 1;
    }
    for(let val of arr2){
        frequencyCounter2[val] = ++frequencyCounter2[val] || 1
    }

    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    for( let key in frequencyCounter1){
      if(!(key ** 2 in frequencyCounter2)){
          return false;
      }
      if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
          return false;
      }
    }

    return true
    
}

console.log(same([1,2,3], [1,4,9]));

//Q2

//write a function that returns true if second string is the anagram of the first.

const isAnagram = (str1, str2) => {

    if(str1.length !== str2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let char of str1){
        frequencyCounter1[char] = ++frequencyCounter1[char] || 1;
    }
    for(let char of str2){
        frequencyCounter2[char] = ++frequencyCounter2[char] || 1;
    }

    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    for(let key in frequencyCounter1){
        if(!(key in frequencyCounter2)){
            return false;
        }
        // if(frequencyCounter2[key] !== frequencyCounter1[key]){
        //     return false
        // }
    }

    return true;
}

isAnagram('rat', 'car');
console.log(isAnagram('rate', 'rate'));