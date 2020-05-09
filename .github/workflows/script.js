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

function md_prefix(i) {
  if (i) {
    let res = '  '.repeat(i);
    return res + "*";
  } else {
    return "\n##"
  }
}

function print_path(old_path, new_path) {
  let old_parts = old_path.split(path.sep);
  let new_parts = new_path.split(path.sep);
  for (let i = 0; i < new_parts.length; ++i) {
    let new_part = new_parts[i];
    if (i + 1 > old_parts.len || old_parts[i] != new_part) {
      if (new_part) {
        g_output.push(`${md_prefix(i)} ${new_part.replace('_', ' ')}`);
        // console.log(`${md_prefix(i)} ${new_part.replace('_', ' ')}`);
      }
    }
  }
  return new_path;
}

good_filepaths();
setTimeout(() => {
  console.log(filepaths);
}, 1000);