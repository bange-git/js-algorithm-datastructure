const maxSubArray = (arr, num) => {
  let tempSum = 0;
  let maxSum = 0;

  if (num > arr.length) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
    console.log(maxSum, tempSum);
  }

  return maxSum;
};

console.log(maxSubArray([1,2,3,4,5,6,7,7,8,9], 3));

//Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

const maxSubarraySum = (arr, num) => {
 if(num > arr.length) return null;
 let maxSum = 0;
 let tempSum = 0;
 for(let i = 0; i < num; i++){
    maxSum += arr[i];
 }
 tempSum = maxSum;
 for(let j = num; j < arr.length; j++){
    tempSum = tempSum - arr[j - num] + arr[j];
    maxSum = Math.max(maxSum, tempSum);
 }
 return maxSum;
}
console.log(maxSubarraySum([100,200,300,400], 2)) // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39 
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
console.log(maxSubarraySum([2,3], 3)) // null