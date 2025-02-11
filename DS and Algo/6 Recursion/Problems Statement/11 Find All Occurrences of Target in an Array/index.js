// Find all occurrences of target in an array

function findTarget(arr, index, target) {
  if (index === arr.length) {
    return [];
  }

  let targetIndeces = findTarget(arr, index + 1, target);
  if (arr[index] === target) {
    return [index, ...targetIndeces];
  }

  return targetIndeces;
};

let arr = [1, 3, 7, 3, 9, 3];
// console.log(findTarget(arr, 0, 3));




function findTargetIndeces(arr, index, target) {
  if (index == arr.length) {
    return;
  }

  if (arr[index] === target) {
    console.log(index);
  }

  findTargetIndeces(arr, index + 1, target);
}

let arr2 = [1, 3, 7, 3, 9, 3];
findTargetIndeces(arr2, 0, 3);