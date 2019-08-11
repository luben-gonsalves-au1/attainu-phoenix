"use strict";

var fs = require("fs");

function merge(left, right) {
  var result = [];
  while (left.length && right.length) {
    var num1 = left[0].split(",")[1];
    var num2 = right[0].split(",")[1];
    if (num1 > num2) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }
  return result;
}

function mergeSort(array) {
  if (array.length <= 1) return array;
  let middle = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, middle));
  let right = mergeSort(array.slice(middle));
  return merge(left, right);
}

function csvRead(file) {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) throw err;
    var swaps;
    var array = data.split("\n");

    var result = mergeSort(array);
    console.log(result.join("\n"));
  });
}

csvRead("data.csv");
