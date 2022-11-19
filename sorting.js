//BUBBLE SORT ALgorithm

/*** Define the swap method */

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const bubbleSort = (arr) => {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        // let temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) {
      break;
    }
  }
  return arr;
};

console.log('bubble',bubbleSort([4, 5, 3, 7, 8, 2]));

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }

    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
};
console.log('selection:',selectionSort([4, 5, 3, 7, 8, 2]));