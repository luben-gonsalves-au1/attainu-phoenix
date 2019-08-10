function subArray(arr) {
  let maximum = 0;
  for (var i = 0; i < arr.length; i++) {
    let sum = 0;
    for (var j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum > maximum) {
        maximum = sum;
      }
    }
  }
  return maximum;
}

subArray([-1, 2, 4, -3, 5, 2, -5, 2]);
