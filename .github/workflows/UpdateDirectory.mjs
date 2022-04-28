import path from 'path'
import fs from 'fs'
import { globby } from 'globby'

function pathPrefix (i) {
  const res = '  '.repeat(i)
  return res + '*'
}

function printPath (oldPath, newPath, output) {
  const oldParts = oldPath.split(path.sep)
  const newParts = newPath.split(path.sep)

  for (let i = 0; i < newParts.length; ++i) {
    const newPart = newParts[i]
    if (i + 1 > oldParts.length || oldParts[i] !== newPart) {
      if (newPart) {
        output.push(`${pathPrefix(i)} **${newPart.replace('_', ' ')}**`)
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
    let filename = path.basename(filepath)
    filepath = path.dirname(filepath)

    if (filepath !== oldPath) {
      oldPath = printPath(oldPath, filepath, output)
    }

    let indent = filepath.split(path.sep).length

    // prepare the markdown-esque prefix to the file's line
    const prefix = pathPrefix(indent)

    // remove extension from filename
    const name = path.basename(filename, ".js")
    const url = path.join(filepath, filename)

    output.push(`${prefix} [${name}](${url})`)
  }

  return output.join('\n')
}

// get paths of all .js files - excluding node_modules, the .github folder, tests and config stuff
globby([
  '**/*.js',
  '!(node_modules|.github)/**/*',
  "!**/test/**/*",
  '!**/*.test.js',
  '!**/*.manual-test.js',
  '!babel.config.js'
])
  // create markdown content
  .then(pathsToMarkdown)
  // write markdown to file
  .then(markdown => fs.writeFileSync('DIRECTORY.md', markdown + '\n', { encoding: 'utf8' }))
