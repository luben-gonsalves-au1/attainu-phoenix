function removeDuplicates(array) {
  var obj = {};
  var result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] in obj) {
      continue;
    } else {
      result.push(array[i]);
      obj[array[i]] = true;
    }
  }
  return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 5, 1, 6, 7, 8]));
