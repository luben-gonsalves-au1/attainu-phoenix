function fizzBuzz() {
  let n = 1;
  while (n <= 100) {
    if (n % 3 == 0 && n % 5 == 0) {
      console.log(`${n} = FizzBuzz`);
    } else if (n % 5 == 0) {
      console.log(`${n} = Buzz`);
    } else if (n % 3 == 0) {
      console.log(`${n} = Fizz`);
    } else {
      console.log(n);
    }
    n++;
  }
}

fizzBuzz();
