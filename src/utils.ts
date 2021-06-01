import fs from 'fs'
import prettier from 'prettier'
const testFilePath = './test/test.ts'
export function log(any: any) {
  console.log(any)
}
export function cleanLogFile() {
  // 这里没有用path模块
  fs.unlinkSync(testFilePath)
}
export function logFile(text: string) {
  fs.writeFileSync(testFilePath, text)
}
export function getFirstEle<T>(arr: T[]) {
  return arr[0]
}

export function getOutputHeadImportTemp() {
  return (
    `/**
  * @/开头的需要项目中配置alias选项
  */` +
    `
    import req from '@/apis/request'
    import { definitions } from '@/apiType/interface'
  \n`
  )
}

export function getOutputApiBody(
  interfaceType: string,
  url: string,
  method: string
) {
  // 这里的模板字符串需要在编译时添加上
  const urlText =
    '`' +
    `${url
      .split('/')
      .map((v) => {
        if (v.includes('{') && v.includes('}')) {
          return (v = '$' + v)
        } else {
          return v
        }
      })
      .join('/')}` +
    '`'
  return `return req<${interfaceType}, any>({
    url: ${urlText},
    method: "${method.toLocaleUpperCase()}"
  })`
}

export function getOutputTemp(
  outputApiName: string,
  outputApiParmas: string,
  outputApiBody: string
) {
  const text = `\n export function ${outputApiName} (${outputApiParmas})  { \n ${outputApiBody} \n }\n\n`
  return text
}

export function formatCode(text: string) {
  const options = prettier.resolveConfig.sync('./.prettierrc.js')
  const formatted = prettier.format(
    text,
    Object.assign(options, {
      parser: 'typescript',
      plugins: [require('@typescript-eslint/parser')]
    })
  )
  return formatted
}
