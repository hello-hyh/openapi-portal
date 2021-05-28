export interface IApiPath {
  url: string;
  method: IApiBody;
}

export interface IApiParameter {
  name: string;
  in?: "query" | "header" | "path" | "body" | "formData";
  description?: string;
  required?: boolean;
  type?: IApiParameterType;
  format?: string;
  enum?: string[]; // V2 ONLY
}
export type IApiParameterType =
  | "string"
  | "number"
  | "boolean"
  | "array"
  | "object"
  | "file";
export type IReference = { $ref: string };

export interface IResponse {
  description?: string;
  headers?: Record<string, IReference>;
  schema?: ISechemObject;
}

export interface ISechemObject {
  uniqueItems?: boolean;
  type?: string;
  items?: IReference;
  description?: string;
}
export interface IApiBody {
  tags: string[];
  summary: string;
  description: string;
  operationId: string;
  consumes: any[];
  produces: string[];
  parameters: IApiParameter[];
  responses: Record<string, IResponse>;
}
