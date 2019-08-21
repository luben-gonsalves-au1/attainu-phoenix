function powerSum(num, pow) {
  let result = num ** pow;
  let sum = 0;
  while (result != 0) {
    sum += result % 10;
    result = Math.floor(result / 10);
  }
 return sum;
}

console.log(powerSum(2, 15));
