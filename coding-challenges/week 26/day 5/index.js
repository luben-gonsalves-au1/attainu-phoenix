function characterCounter(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] in obj) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  result = "";
  for (let elem in obj) {
    result += elem + obj[elem];
  }
  console.log(result);
}

characterCounter("AAABCCDDDD");
