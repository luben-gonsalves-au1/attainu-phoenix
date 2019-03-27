"use strict";

var pattern = n => {
  var pattern = "*";
  for (var i = 1; i <= n; i++) {
    console.log(pattern.repeat(i));
  }
  for (var j = n; j >= 1; j--) {
    console.log(pattern.repeat(j));
  }
};

pattern(5);
