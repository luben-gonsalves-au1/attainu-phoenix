"use strict";

var fs = require("fs");

function csvRead(file) {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) throw err;
    var array = data.split("\n");
    var str1 = array[0].split(",")[1];
    console.log(str1);

    const swap = (arr, indx1, indx2) => {
      [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
    };
    var noSwaps;

    for (let i = array.length - 1; i > 0; i--) {
      noSwaps = false;
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
          noSwaps = true;
        }
      }
      if (!noSwaps) {
        break;
      }
    }
    return arr;
  });
}

csvRead("data.csv");
