"use strict";

// Every
var a = [1, 2, 3, 4];

var b = a.every(a => a > 0);
// returns true because all elements are greater than 0
console.log(b);

// Some
var c = [5, 6, 7, 8];
var d = d.some(d => d > 6);
// returns true if some elements are greater than 0
console.log(d);

//reduce (left to right)
var e=[9,10,11,12];
//returns single value
var f=e.reduce((a,b)=>a+b);
console.log(f)

//reduce right (right to left);
var g=[13,14,15,16]
var h=g.reduceRight((a,b)=>a+b);
console.log(h)
