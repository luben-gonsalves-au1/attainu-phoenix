const express = require("express");

const app = new express();

app.set("view engine", "hbs");

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

var contacts = [];

app.get("/", (req, res) => {
  res.render("index.hbs", contacts);
});

app.post("/", (req, res) => {
  var name = req.body.name;
  var number = req.body.number;
  var data = {
    name: name,
    number: number
  };
  contacts.push(data);
  console.log(contacts);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("app has been started at port 3000");
});
