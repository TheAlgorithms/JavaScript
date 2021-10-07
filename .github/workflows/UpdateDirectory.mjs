import path from 'path'
import fs from 'fs'
import { globby } from 'globby'

const URL_BASE = 'https://github.com/TheAlgorithms/Javascript/blob/master'

function pathPrefix (i) {
  if (i) {
    const res = '  '.repeat(i)
    return res + '*'
  } else {
    return '\n##'
  }
}

function printPath (oldPath, newPath, output) {
  const oldParts = oldPath.split(path.sep)
  const newParts = newPath.split(path.sep)
  for (let i = 0; i < newParts.length; ++i) {
    const newPart = newParts[i]
    if (i + 1 > oldParts.length || oldParts[i] !== newPart) {
      if (newPart) {
        output.push(`${pathPrefix(i)} ${newPart.replace('_', ' ')}`)
      }
    }
  }
  return newPath
}

function pathsToMarkdown (filePaths) {
  const output = []

  let oldPath = ''
  filePaths.sort(function (a, b) {
    if (a.toLowerCase() < b.toLowerCase()) return -1
    if (a.toLowerCase() > b.toLowerCase()) return 1
    return 0
  })
  for (let filepath of filePaths) {
    const file = filepath.split(path.sep)
    let filename = ''
    if (file.length === 1) {
      filepath = ''
      filename = file[0]
    } else {
      const total = file.length
      filename = file[total - 1]
      filepath = file.splice(0, total - 1).join(path.sep)
    }
    if (filepath !== oldPath) {
      oldPath = printPath(oldPath, filepath, output)
    }
    let indent = 0
    for (let i = 0; i < filepath.length; ++i) {
      if (filepath[i] === path.sep) {
        ++indent
      }
    }
    if (filepath) {
      ++indent
    }

    // prepare the markdown-esque prefix to the file's line
    const prefix = pathPrefix(indent)

    // remove extension from filename
    const name = filename.split('.')[0]

    // create URL to the actual file on github
    const url = encodeURI([URL_BASE, filepath, filename].join('/'))

    output.push(`${prefix} [${name}](${url})`)
  }

  return output.join('\n')
}

// get paths of all .js files - excluding node_modules, the .github folder, tests and config stuff
globby([
  '**/*.js',
  '!(node_modules|.github)/**/*',
  '!**/*.test.js',
  '!**/*.manual-test.js',
  '!babel.config.js'
])
  // create markdown content
  .then(pathsToMarkdown)
  // write markdown to file
  .then(markdown => fs.writeFileSync('DIRECTORY.md', markdown + '\n', { encoding: 'utf8' }))
