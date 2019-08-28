function insertionSort(array) {
  for (var i = 1; i < array.length; i++) {
    var j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      swap(array, j, j - 1);
      j--;
    }
  }
  return array;
}

function swap(arr, indx1, indx2) {
  [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
}

console.log(insertionSort([1, 45, 23, 16, 7]));
