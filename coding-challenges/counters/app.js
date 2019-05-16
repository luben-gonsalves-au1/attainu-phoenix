"use strict";

var globalButton = document.getElementById("globalButton");
var objectButton = document.getElementById("objectButton");
var closureButton = document.getElementById("closureButton");

var globalP = document.getElementById("globalP");
var objectP = document.getElementById("objectP");
var closureP = document.getElementById("closureP");

var gcounter = 0;
var globalFunc = () => {
  gcounter++;
  globalP.innerText = `Global counter : ${gcounter}`;
};

var obj = {
  counter: 0
};

var objectFunc = () => {
  obj.counter++;
  console.log(obj["counter"]);
  objectP.innerText = `Object counter : ${obj.counter}`;
};

var closureFunc = () => {
  var counter = 0;

  var counterFunc = () => {
    counter++;
    closureP.innerText = `Closure counter : ${counter}`;
  };
  return counterFunc;
};

var counterFunc = closureFunc();

globalButton.addEventListener("click", globalFunc);
objectButton.addEventListener("click", objectFunc);
closureButton.addEventListener("click", counterFunc);
