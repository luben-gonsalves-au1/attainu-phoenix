function merge(array1, array2) {
  var results = [];
  var i = 0;
  var j = 0;

  while (i < array1.length && j < array2.length) {
    if (array2[j] > array1[i]) {
      results.push(array1[i]);
      i++;
    } else {
      results.push(array2[j]);
      j++;
    }
  }

  while (i < array1.length) {
    results.push(array1[i]);
    i++;
  }

  while (j < array2.length) {
    results.push(array2[j]);
    j++;
  }

  return results;
}

function mergeSort(array) {
  if (array.length <= 1) return array;
  var mid = Math.floor(array.length / 2);
  var left = mergeSort(array.slice(0, mid));
  var right = mergeSort(array.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([1, 45, 23, 16, 7]));
