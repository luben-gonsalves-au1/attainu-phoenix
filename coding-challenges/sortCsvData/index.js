"use strict";

var fs = require("fs");

function csvRead(file) {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) throw err;
    var swaps;
    var array = data.split("\n");

    const swap = (arr, indx1, indx2) => {
      var temp = arr[indx1];
      arr[indx1] = arr[indx2];
      arr[indx2] = temp;
    };

    for (let i = array.length - 1; i > 0; i--) {
      swaps = false;
      for (let j = 0; j < i; j++) {
        var num1 = array[j].split(",")[1];
        var num2 = array[j + 1].split(",")[1];
        if (num1 < num2) {
          swap(array, j, j + 1);
          swaps = true;
        }
      }
      if (!swaps) {
        break;
      }
    }
    console.log(array);
  });
}

csvRead("data.csv");
