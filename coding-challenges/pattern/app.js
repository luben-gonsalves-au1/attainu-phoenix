"use strict";

// using repeat
// var pattern = n => {
//   var pattern = "*";
//   for (var i = 1; i <= n; i++) {
//     console.log(pattern.repeat(i));
//   }
//   for (var j = n; j >= 1; j--) {
//     console.log(pattern.repeat(j));
//   }
// };

// without using repeat
var pattern = n => {
  var pattern = "";
  for (var i = 1; i <= n; i++) {
    pattern += "*";
    console.log(pattern);
  }
 for( var i=n-1;i>=1;i--){
    console.log(pattern);
  }
};

pattern(5);
