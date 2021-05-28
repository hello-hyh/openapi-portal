export function warn() {}
export function log(any: any) {
  console.log(any);
}
export function getFirstEle<T>(arr: T[]) {
  return arr[0];
}

export function getApiBody(interfaceType: string, url: string, method: string) {
  return `req<${interfaceType}, any>({
    url: ${url},
    method: ${method}
  })`;
}

export function getOutputTemp(
  outputApiName: string,
  outputApiParmas: string,
  outputApiBody: string
) {
  return `function ${outputApiName} (${outputApiParmas})  { ${outputApiBody} }`;
}
