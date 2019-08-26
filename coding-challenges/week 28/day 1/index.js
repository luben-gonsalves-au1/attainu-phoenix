function checkPallindrome(string) {
  let result = "";
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result === string;
}

function main() {
  if (process.argv.length !== 3) {
    return console.log("Enter the string");
  } else {
    return checkPallindrome(process.argv[2]);
  }
}

console.log(main());
