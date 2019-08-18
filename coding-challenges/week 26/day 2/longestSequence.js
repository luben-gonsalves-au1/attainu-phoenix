let result = [];
for (let i = 1; i < 1000000; i++) {
  let arr = [];
  let j = i;
  while (j > 1) {
    if (j % 2 == 0) {
      j = j / 2;
      arr.push(j);
    } else {
      j = 3 * j + 1;
      arr.push(j);
    }
  }
  result.push(arr);
}

var longest = result[1];
for (let k = 1; k < result.length; k++) {
  if (result[k].length > longest.length) {
    longest = result[k];
  }
}

console.log(
  `The longest sequence is ${longest} and the length is ${longest.length}`
);
