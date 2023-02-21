import fs from 'fs/promises'

export const logDataToTestFile = async (id, data) => {
  fs.appendFile('./test.json', `"${id}": ${data},\n`)
}
