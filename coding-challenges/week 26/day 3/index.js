function duplicateString(string) {
  let obj = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] in obj) {
      return false;
    }
    obj[string[i]] = true;
  }
  return true;
}

console.log(duplicateString("ansal"));
