function bubbleSort(arr) {
  var noSwap;
  for (var i = arr.length - 1; i > 0; i--) {
    noSwap = false;
    for (j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = true;
      }
    }
    if (!noSwap) break;
  }
  return arr;
}

console.log(bubbleSort([1, 45, 23, 16, 7]));
