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

function main() {
	if(process.argv.length !== 4) {
		return console.log("Enter the filename and searchstring");
	} else {
		searchFile(process.argv[2], process.argv[3]);
	}
}

main();
