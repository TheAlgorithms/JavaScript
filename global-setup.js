import fs from 'fs/promises'

export default () => {
  fs.writeFile('./test.json', '{\n')
}
