class ColorConsole {
  constructor(color) {
    this.color = color;
  }
  log(text) {
    if (this.color == "red") return console.log("\x1b[31m", text);
    if (this.color == "green") return console.log("\x1b[32m", text);
    if (this.color == "yellow") return console.log("\x1b[32m", text);
  }
}

let myConsole = new ColorConsole("yellow");
myConsole.log("Attain University");
