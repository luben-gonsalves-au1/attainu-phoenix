function largest(arr) {
  let largest = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(largest([1, 5, 2, 7, 8]));

function smallest(arr) {
  let smallest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

console.log(smallest([1, 5, 2, 7, 8]));
