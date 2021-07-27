const path = require("path");
const fs = require("fs");
let dt = "";
const dir = "dist";
const directoryPath = path.join(__dirname, dir);
const files = fs.readdirSync(directoryPath);
files.forEach(function (file) {
  if (file.substr(file.length - 2) === "js")
    if (file.substr(0, 5) === "setup") {
      dt = file.substr(5, file.length - 8);
    }
});
fs.rename("dist\\styles.css", "dist\\styles" + dt + ".css", function (err) {
  if (err) console.log("ERROR: " + err);
});
