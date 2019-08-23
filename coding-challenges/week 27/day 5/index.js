function difference(n) {
  let sqaures = 0;
  let nNumbers = 0;
  for (var i = 1; i <= n; i++) {
    nNumbers += i;
    sqaures += i ** 2;
  }
  return nNumbers ** 2 - sqaures;
}
console.log(difference(100));
