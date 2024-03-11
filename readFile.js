import { pa } from 'element-plus/es/locale/index.mjs'
import fs, { write } from 'fs'
import path from 'path'

function writeFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content, { encoding: 'utf8' })
  } catch (error) {
    console.error(`Error writing the file: ${error.message}`)
  }
}

let egos = []

function readFolder(folderPath) {
  try {
    // 读取文件夹内容
    const files = fs.readdirSync(folderPath)

    // 显示文件列表
    files.forEach((file) => {
      const filePath = path.join(folderPath, file)
      const stats = fs.statSync(filePath)

      if (stats.isFile()) {
        const folder = folderPath
          .replaceAll(/\\/gi, '/')
          .replaceAll('./assets/', '/_nuxt/assets/')
        const filePath = path.join(folder, file)
        console.log(filePath)
        egos.push(`"${filePath}"`)
        writeFile(
          './assets/paths/ego-gifts.ts',
          `export const egoGifts = [${egos}]`
        )
      } else if (stats.isDirectory()) {
        console.log(`Directory: ${file}`)
      }
    })
  } catch (error) {
    console.error(`Error reading folder: ${error.message}`)
  }
}

// 指定要读取的文件夹路径
const folderPath = './assets/images/ego-gift'

// 调用函数
readFolder(folderPath)
