// requiring path and fs modules
const path = require('path');
const fs = require('fs');

let URL_BASE = "https://github.com/TheAlgorithms/Javascript/blob/master";
let g_output = [];

let filepaths = [];
function good_filepaths(top_dir = ".") {
  fs.readdir(top_dir, function(err, list) {
    if (err) {
      console.log(err);
      return;
    }
    list.forEach(function(file) {
      let path = top_dir + "/" + file;
      if (!file.startsWith(".")) {
        fs.stat(path, function(err, stat) {
          if (stat && stat.isDirectory()) {
            good_filepaths(path);
          } else {
            if (file.toLowerCase().endsWith(".js")) {
              filepaths.push(path.slice(2));
              // console.log(filepaths);
            }
          }
        });
      }
    });
  })
}

good_filepaths();
setTimeout(() => {
  console.log(filepaths.length);
}, 1000);