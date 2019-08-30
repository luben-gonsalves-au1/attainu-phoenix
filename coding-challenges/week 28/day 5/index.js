function pairSum(array, target) {
  var obj = {};
  for (let num of array) {
    let potentialSum = target - num;
    if (potentialSum in obj) {
      return [num, potentialSum];
    } else {
      obj[num] = true;
    }
  }
  return [];
}

console.log(pairSum([1, 2, 4, 5, 6, 10, 12], 10));
