"use strict";

var fs = require("fs");

function searchFile(file, string) {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) throw err;
    var arr = data.split("\n");
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].includes(string)) {
        return console.log(`${string} is found at line ${i + 1}`);
      }
    }
    console.log("String didn't match");
  });
}

searchFile("searchMe.txt", "luben");
