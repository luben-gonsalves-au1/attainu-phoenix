function quickSort(array) {
  if (array.length <= 1) return array;
  let left = [],
    right = [],
    pivot = array.shift(),
    center = [pivot];

  while (array.length) {
    let currentElement = array.shift();
    if (currentElement == pivot) {
      center.push(pivot);
    } else if (currentElement < pivot) {
      left.push(currentElement);
    } else {
      right.push(currentElement);
    }
  }
  let sortedLeft = quickSort(left);
  let sortedRight = quickSort(right);

  return sortedLeft.concat(center, sortedRight);
}

function concatArray(array1, array2) {
  for (let i = 0; i < array2.length; i++) {
    array1.push(array2[i]);
  }

  let sortedArray = quickSort(array1);
  return sortedArray;
}

console.log(concatArray([1, 3, 5, 7], [2, 4, 5, 6]));
