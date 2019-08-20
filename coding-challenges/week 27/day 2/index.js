function permutation(array, k = array.length) {
  if (k == 1) {
    console.log(array);
  } else {
    permutation(array, k - 1);
    for (var i = 0; i < k - 1; i += 1) {
      if (k % 2 == 0) {
        [array[i], array[k - 1]] = [array[k - 1], array[i]];
      } else {
        [array[0], array[k - 1]] = [array[0], array[k - 1]];
      }
      permutation(array, k - 1);
    }
  }
}

permutation(["A", "B", "C"]);
