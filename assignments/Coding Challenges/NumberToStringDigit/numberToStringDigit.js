"use strict";

var text = ["zero","one","two","three","four","five","six","seven","eight","nine"]

var convert = (num) => {
  var arr = num.toString().split('') ;
  return arr.map(x=>text[x]).join(" ");
}

convert(117);