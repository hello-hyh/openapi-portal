/**
 * 怎么做缓存
 * 怎么把json中的类型转成interface
 * 怎么把根据query类型转成data参数
 */
import * as json from '../test/swagger.json'
import {
  log,
  getFirstEle,
  getOutputApiBody,
  getOutputTemp,
  logFile,
  getOutputHeadImportTemp,
  formatCode
} from './utils'
import { IApiBody, IApiParameter } from './types'
const paths = Object.entries(json.paths)
let outputStr: string = getOutputHeadImportTemp()
// cleanLogFile()
paths.forEach((body) => {
  // /api/xxxx
  const baseApiPath = getFirstEle(body) as string
  const baseApiBody = body.slice(1)
  baseApiBody.forEach((apiInfo) => {
    let outputApiName = '',
      outputApiParmas = '',
      apibdoy = ''
    const apiRequest: [string, IApiBody][] = Object.entries(apiInfo)
    // 如果一个接口存在多个类型的请求
    apiRequest.forEach((apiRequestBody) => {
      const apiType = getFirstEle(apiRequestBody) as string
      const apiTypeBody = apiRequestBody.slice(1) as IApiBody[]
      for (const { parameters, responses } of apiTypeBody) {
        // 输出的参数
        outputApiParmas = getOutputFunctionParams(outputApiParmas, parameters)
        for (const [name, respObj] of Object.entries(responses)) {
          if (name === '200') {
            // respObj.schema.items.$ref;
          }
        }
      }
      outputApiName = getOutputFunctionName(baseApiPath, apiType)

      outputStr += getOutputTemp(
        outputApiName,
        outputApiParmas,
        getOutputApiBody('test', baseApiPath, apiType)
      )
    })
  })
})
logFile(formatCode(outputStr))

function getOutputFunctionParams(
  outputApiParmas: string,
  parameters: IApiParameter[]
) {
  outputApiParmas = Array.from(parameters, (x) => {
    return `${x.name}${!x?.required ? '?' : ''}: ${paramsType(x.type)}`
  }).join(', ')
  return outputApiParmas
}

function getOutputFunctionName(baseApiInfo: string, apiType: string) {
  let baseFuncName = baseApiInfo
    .split('/')
    .filter((v) => !(v.includes('{') || v.includes('}')))
    .join('')
  let firstChar = baseFuncName.substring(0, 1)
  baseFuncName =
    apiType +
    firstChar.toLocaleUpperCase() +
    baseFuncName.substring(1, baseFuncName.length + 1)
  log(baseFuncName)
  return baseFuncName
}

function paramsType(type?: string) {
  if (
    ['binary', 'byte', 'date', 'dateTime', 'password', 'string'].includes(type)
  ) {
    return 'string'
  }

  if (['double', 'float', 'integer', 'number'].includes(type)) {
    return 'number'
  }
  if (type === 'array') {
    return 'array'
  }
  if (type === 'boolean') {
    return 'boolean'
  }
  if (type === 'object') {
    return 'boolean'
  }
  return 'any'
}
