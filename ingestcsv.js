var fs = require("fs");
//create csv file (exclude row / column headers as lines will remain preserved)
var data = fs
  //swap out to file you want
  .readFileSync("./pbgc.csv")
  .toString()
  .split("\n")
  .map((e) =>
    e
      .split()
      .map((b) => b.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g))
      .flat()
      .map((c) => c.replace(/[", t]+/g, ""))
  );

var cleanData = data.map((e) => e.map((f) => parseInt(f)));
console.log(cleanData);
