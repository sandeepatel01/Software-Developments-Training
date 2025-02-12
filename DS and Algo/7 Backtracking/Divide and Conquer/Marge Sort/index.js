function merge(arr, start, end) {
  let mid = Math.floor((start + end) / 2);

  let leftLength = mid - start + 1;
  let rightLength = end - mid;

  let left = new Array(leftLength);
  let right = new Array(rightLength);

  let k = start;
  for (let i = 0; i < leftLength; i++) {
    left[i] = arr[k];
    k++;
  }

  k = mid + 1;
  for (let i = 0; i < rightLength; i++) {
    right[i] = arr[k];
    k++;
  }

  let leftIndex = 0;
  let rightIndex = 0;
  let mainArrayIndex = start;

  while (leftIndex < leftLength && rightIndex < rightLength) {
    if (left[leftIndex] < right[rightIndex]) {
      arr[mainArrayIndex] = left[leftIndex];
      leftIndex++;
    } else {
      arr[mainArrayIndex] = right[rightIndex];
      rightIndex++;
    }
    mainArrayIndex++;
  }

  while (leftIndex < leftLength) {
    arr[mainArrayIndex] = left[leftIndex];
    leftIndex++;
    mainArrayIndex++;
  }

  while (rightIndex < rightLength) {
    arr[mainArrayIndex] = right[rightIndex];
    rightIndex++;
    mainArrayIndex++;
  }
}

function mergeSort(arr, start, end) {
  if (start >= end) {
    return;
  }

  let mid = Math.floor((start + end) / 2);

  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);

  merge(arr, start, end);
}

let arr = [2, 1, 6, 9, 4, 5];

console.log("Before sorting:", arr);

mergeSort(arr, 0, arr.length - 1);

console.log("After sorting:", arr);


