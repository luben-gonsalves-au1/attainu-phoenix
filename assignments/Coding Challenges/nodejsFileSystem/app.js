"use strict";

var fs = require("fs");

var messageWrite = (file, message, n) => {
  var message = fs.writeFile(file, message.repeat(n), err => {
    if (err) throw err;
    console.log("file has been saved");
  });
};

messageWrite("hello.txt", "Welcome to AttainU ", 50);
