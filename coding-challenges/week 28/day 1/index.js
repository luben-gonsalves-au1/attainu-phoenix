const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question(`Enter the string: \n`, string => {
  let result = "";
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  console.log(result == string);
  readline.close();
});
