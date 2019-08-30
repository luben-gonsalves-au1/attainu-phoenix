function pairSum(array, target) {
  let obj = {};
  let result = [];
  for (let num of array) {
    let potentialSum = target - num;
    if (potentialSum in obj) {
      result.push([num, potentialSum]);
    } else {
      obj[num] = true;
    }
  }
  return result;
}

console.log(pairSum([1, 2, 4, 5, 6, 10, 12], 10));
