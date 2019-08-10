function commonElements(arr1, arr2) {
  let match = [];
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        if (match.indexOf(arr1[i]) === -1) {
          match.push(arr1[i]);
        }
      }
    }
  }
  return match;
}

console.log(commonElements([1, 2, 3, 4], [1, 2, 5, 6, 7]));
