function missingElements(array) {
  var max = Math.max.apply(null, array);
  var result = [];
  for (let i = 1; i <= max; i++) {
    if (array.indexOf(i) === -1) {
      result.push(i);
    }
  }
  return result;
}

console.log(missingElements([2, 3, 4, 5, 6, 7, 9, 15, 14, 12, 11]));
