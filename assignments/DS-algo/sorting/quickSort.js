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

console.log(quickSort([1, 45, 23, 16, 7]));
