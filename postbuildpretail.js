// const path = require("path");
// const fs = require("fs");
// const copydir = require("copy-dir");
// const dt = new Date().getTime();
// // fs.rename("dist\\main.js", "dist\\main" + dt + ".js", function (err) {
// //   if (err) console.log("ERROR: " + err);
// // });
// var dataDist = fs.readFileSync("dist\\index.html", "utf-8");
// var newDist = dataDist.replace("styles.css", "styles" + dt + ".css");
// //newDist = newDist.replace("setup.js", "setup" + dt + ".js");
// newDist = newDist.replace("Alle", dt.toString().substr(-4));
// fs.writeFileSync("dist\\index.html", newDist, "utf-8");
// copydir.sync("./assets/", "./dist/", {
//   filter: function (stat, filepath, filename) {
//     console.log("filter " + filename);
//     console.log("styles.css" === filename);
//     return filename !== "styles.css";
//   },
//   utimes: true, // keep add time and modify time
//   mode: true, // keep file mode
//   cover: true, // cover file when exists, default is true
// });
// // var dataRW = fs.readFileSync("dist\\setup.js", "utf-8");
// // var newRW = dataRW.replace("webworker.js", "webworker" + dt + ".js");
// // newRW = newRW.replace("false &&", "");
// // fs.writeFileSync("dist\\setup.js", newRW, "utf-8");

// fs.rename("dist\\webworker.js", "dist\\webworker" + dt + ".js", function (err) {
//   if (err) console.log("ERROR: " + err);
//   fs.rename("dist\\setup.js", "dist\\setup" + dt + ".js", function (err2) {
//     if (err2) console.log("ERROR: " + err);
//   });
//   var dataSW = fs.readFileSync("dist\\sw.js", "utf-8");
//   const dir = "dist";
//   const directoryPath = path.join(__dirname, dir);
//   const files = fs.readdirSync(directoryPath);
//   let fileTxt = '"/","/styles' + dt + '.css",';
//   var ignore = ["sw.js", "styles.css", "index.html"];
//   let mainFileName = "";
//   files.forEach(function (file) {
//     console.log(file);
//     if (file.substr(0, 4) === "main") {
//       console.log(file);
//       mainFileName = file;
//     }
//     if (file.indexOf(".") > -1)
//       if (ignore.indexOf(file) === -1) fileTxt += '"/' + file + '",';
//   });
//   var dataMain = fs.readFileSync("dist\\" + mainFileName, "utf-8");
//   var newMain = dataMain.replace("webworker.js", "webworker" + dt + ".js");
//   fs.writeFileSync("dist\\" + mainFileName, newMain, "utf-8");
//   var newSW = dataSW.replace('"xxx"', fileTxt.substr(0, fileTxt.length - 1));
//   fs.writeFileSync("dist\\sw.js", newSW, "utf-8");
//   // });
// });
console.log("whoa");
