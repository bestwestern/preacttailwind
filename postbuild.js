const path = require("path");
const fs = require("fs");
const copydir = require("copy-dir");
const stringHash = require("string-hash");
const directoryPath = path.join(__dirname, "dist");
const UglifyJS = require("uglify-js");
copydir.sync("./assets/", "./dist/", {
  filter: function (stat, filepath, filename) {
    return ["styles.css", "webworker.js"].indexOf(filename) === -1;
  },
  utimes: true, // keep add time and modify time
  mode: true, // keep file mode
  cover: true, // cover file when exists, default is true
});
var dataStyles = fs.readFileSync("dist\\styles.css", "utf-8");
var stylesHash = stringHash(dataStyles);
fs.rename(
  "dist\\styles.css",
  "dist\\styles" + stylesHash + ".css",
  function (err1) {
    if (err1) console.log("ERR1OR: " + err);
    var dataWebworker = fs.readFileSync("assets\\webworker.js", "utf-8");
    var webWorkerHash = stringHash(dataWebworker);
    console.log(dataWebworker);
    // var result = UglifyJS.minify("assets\\webworker.js");
    // console.log(result.code);
    fs.writeFile(
      "dist\\webworker" + webWorkerHash + ".js",
      dataWebworker,
      function (err2) {
        if (err2) {
          console.log(err);
        } else {
          console.log("File was successfully saved.");
          let fileTxt = '"/",';
          var ignore = ["sw.js", "index.html"];
          let mainFileName = "";
          const files = fs.readdirSync(directoryPath);
          files.forEach(function (file) {
            console.log(file);
            if (file.substr(0, 4) === "main") {
              mainFileName = file;
            }
            if (file.indexOf(".") > -1 && ignore.indexOf(file) === -1)
              fileTxt += '"/' + file + '",';
          });
          var dataMain = fs.readFileSync("dist\\" + mainFileName, "utf-8");
          var newMain = dataMain.replace(
            "webworker.js",
            "webworker" + webWorkerHash + ".js"
          );
          fs.writeFileSync("dist\\" + mainFileName, newMain, "utf-8");
          var dataSW = fs.readFileSync("dist\\sw.js", "utf-8");
          var newSW = dataSW.replace(
            '"xxx"',
            fileTxt.substr(0, fileTxt.length - 1)
          );
          fs.writeFileSync("dist\\sw.js", newSW, "utf-8");
          var dataIndex = fs.readFileSync("dist\\index.html", "utf-8");
          var newIndex = dataIndex.replace(
            "styles.css",
            "styles" + stylesHash + ".css"
          );
          newIndex = newIndex.replace(
            "Alle",
            new Date().getTime().toString().substr(-4)
          );
          fs.writeFileSync("dist\\index.html", newIndex, "utf-8");
        }
      }
    );
  }
);
