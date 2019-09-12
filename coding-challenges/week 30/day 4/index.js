function parenthesis(string) {
  var stack = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(" || string[i] === "[" || string[i] === "{") {
      stack.push(string[i]);
    } else if (
      string[i] === ")" &&
      stack.length > 0 &&
      stack[stack.length - 1] == "("
    ) {
      stack.pop();
    } else if (
      string[i] === "]" &&
      stack.length > 0 &&
      stack[stack.length - 1] == "["
    ) {
      stack.pop();
    } else if (
      string[i] === "}" &&
      stack.length > 0 &&
      stack[stack.length - 1] == "{"
    ) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
}

console.log(parenthesis(")"));
