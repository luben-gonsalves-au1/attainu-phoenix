var express = require("express");

var app = new express();

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view enginer", "hbs");

var userDb = [
  { name: "ansal", password: "ansal123" },
  { name: "vaibhav", password: "vaibhav123" },
  { name: "divyam", password: "divyam123" }
];

var loginStatus = [];

app.get("/", (req, res) => {
  var data = {
    status: loginStatus
  };
  res.render("index.hbs", data);
});

app.get("/user", (req, res) => {
  res.send("login successful");
});

app.post("/add", (req, res) => {
  var name = req.body.name;
  var password = req.body.password;
  for (var i in userDb) {
    if (userDb[i].name == name && userDb[i].password == password) {
      return res.redirect("/user");
    }
  }
  loginStatus.push("true");
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("app has been started at port 3000");
});
