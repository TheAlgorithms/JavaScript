import { exec } from 'child_process'
import fs from 'fs/promises'

const prettifyFile = (filePath) => {
  return new Promise((resolve, reject) => {
    exec(`npx prettier -w ${filePath}`, (error, stdout, stderr) => {
      if (error) {
        reject(error)
      } else {
        resolve(stdout)
      }
    })
  })
}

export default async () => {
  const testFileLocation = './test.json'
  await fs.appendFile(testFileLocation, '}\n')
  await prettifyFile(testFileLocation)

  const json = await fs.readFile(testFileLocation, 'utf-8')
  const data = JSON.parse(json)
  console.log(data)
}
