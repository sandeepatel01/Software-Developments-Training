function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }

  let pivot = end;
  let i = start - 1;
  let j = start;

  while (j < pivot) {
    if (arr[j] < arr[pivot]) {
      i++;
      // destructuring assignment
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
    }
    j++;
  }

  i++;
  [arr[i], arr[pivot]] = [arr[pivot], arr[i]]; // Pivot ko sahi jagah rakho

  quickSort(arr, start, i - 1);
  quickSort(arr, i + 1, end);
}

// Test case
let arr = [2, 1, 6, 9, 4, 5];
console.log("Before sorting:", arr);

quickSort(arr, 0, arr.length - 1);

console.log("After sorting:", arr);
