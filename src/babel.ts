import { parse } from "@babel/parser";
import generate from "@babel/generator";
import { log } from "./warn";

export function transformCode(code: string) {
  code = `function postApiSearchKeywordsQuery (sort?: string, skip?: number, take?: number, fields?: string, filters?: string)  { req<test, any>({
    url: /api/SearchKeywords/Query,
    method: post
  }) }`;
  const ast = parse(code);

  const output = generate(
    ast,
    {
      /* options */
    },
    code
  );
  log(output);
}
transformCode("")