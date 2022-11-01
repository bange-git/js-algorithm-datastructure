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