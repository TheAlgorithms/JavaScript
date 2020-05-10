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
      }
    }
  }
  return new_path;
}

function build_directory_md(top_dir = ".") {
  old_path = "";
  filepaths.sort(function(a, b) {
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    return 0;
  });
  for (let filepath of filepaths) {
    file = filepath.split(path.sep);
    if (file.length == 1) {
      filepath = "";
      filename = file[0];
    } else {
      let total = file.length;
      filename = file[total - 1];
      filepath = file.splice(0, total - 1).join(path.sep);
    }
    if (filepath != old_path) {
      old_path = print_path(old_path, filepath);
    }
    let indent = 0;
    for (let i = 0; i < filepath.length; ++i) {
      if (filepath[i] == path.sep) {
        ++indent;
      }
    }
    if (filepath) {
      ++indent;
    }
    let urls = [URL_BASE, filepath, filename];
    let url = urls.join("/").replace(" ", "%20");
    // remove extension from filename
    filename = filename.split(".")[0];
    g_output.push(`${md_prefix(indent)} [${filename}](${url})`);
  }
  g_output = g_output.join('\n');
  return g_output;
}

good_filepaths();
setTimeout(() => {
  // once the filepaths have been computed
  build_directory_md();
  // console.log(filepaths);
}, 1000);
setTimeout(() => {
  // once the g_output has been constructed, write to the file
  fs.writeFile('DIRECTORY.md', g_output + '\n', (err) => {
    if (err) {
      console.log(err);
    }
  })
  // console.log(g_output);
}, 1000);
