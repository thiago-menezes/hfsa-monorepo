/**
 * TypeScript types for OpenAPI structures
 */

// Basic OpenAPI types

export type OpenAPIGeneratorOptions = {
  title: string;
  description?: string;
  version?: string;
  servers?: Array<{ url: string; description: string }>;
  outputPath?: string;
  baseSchemas?: Record<string, SchemaObject>;
};

export type OpenAPISpec = {
  openapi: string;
  info: InfoObject;
  servers: ServerObject[];
  paths: PathsObject;
  components: ComponentsObject;
  tags: TagObject[];
};

export type InfoObject = {
  title: string;
  description: string;
  version: string;
  contact: Record<string, string>;
};

export type ServerObject = {
  url: string;
  description: string;
};

export type TagObject = {
  name: string;
  description: string;
};

export type PathsObject = {
  [path: string]: PathItemObject;
};

export type PathItemObject = {
  [method: string]: OperationObject;
};

export type OperationObject = {
  tags?: string[];
  summary?: string;
  description?: string;
  operationId?: string;
  parameters?: ParameterObject[];
  requestBody?: RequestBodyObject;
  responses: ResponsesObject;
  [key: string]: any;
};

export type ParameterObject = {
  name: string;
  in: string;
  description?: string;
  required?: boolean;
  schema: SchemaObject;
  [key: string]: any;
};

export type SchemaObject = {
  type?: string;
  properties?: Record<string, SchemaObject>;
  items?: SchemaObject;
  required?: string[];
  [key: string]: any;
};

export type RequestBodyObject = {
  content: ContentObject;
  [key: string]: any;
};

export type ResponsesObject = {
  [statusCode: string]: ResponseObject;
};

export type ResponseObject = {
  description: string;
  content?: ContentObject;
  [key: string]: any;
};

export type ContentObject = {
  [mediaType: string]: {
    schema?: SchemaObject;
    examples?: Record<string, ExampleObject>;
    [key: string]: any;
  };
};

export type ExampleObject = {
  value: any;
  [key: string]: any;
};

export type ComponentsObject = {
  schemas: Record<string, SchemaObject>;
  [key: string]: any;
};

// Mock file structure
export type MockFile = {
  paths?: PathsObject;
  schemas?: Record<string, SchemaObject>;
  tags?: TagObject[];
};

// Enhanced types for better type safety
export type HttpMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';
export type ParameterLocation = 'path' | 'query' | 'header' | 'cookie';
export type ParameterType =
  | 'string'
  | 'number'
  | 'integer'
  | 'boolean'
  | 'array'
  | 'object';

// Generic parameter type
export type TypedParameter<T = any> = {
  name: string;
  description?: string;
  location: ParameterLocation;
  required?: boolean;
  type: ParameterType;
  example?: T extends Record<string, any> ? T[keyof T] : T;
  schema?: SchemaObject;
};

// Generic response type
export type TypedResponse<T = any> = {
  statusCode: number | string;
  description: string;
  contentType?: string;
  schema?: string | SchemaObject;
  example?: T;
};

// Generic request body type
export type TypedRequestBody<T = any> = {
  contentType?: string;
  schema?: string | SchemaObject;
  required?: boolean;
  example?: T;
};

// Generic endpoint type with full type safety
export type TypedEndpoint<Params = any, Body = any, Response = any> = {
  name: string;
  path: string;
  method: HttpMethod;
  tags?: string[];
  description?: string;
  parameters?: TypedParameter<Params>[];
  requestBody?: TypedRequestBody<Body>;
  responses: TypedResponse<Response>[];
};

// Utility types for common patterns
export type PathParams<T> = T extends { [K in keyof T]: any } ? T : never;
export type QueryParams<T> = T extends { [K in keyof T]: any } ? T : never;
export type RequestBody<T> = T;
export type ApiResponse<T> = T;

// Common HTTP status codes
export type HttpStatus =
  | 200
  | 201
  | 204
  | 400
  | 401
  | 403
  | 404
  | 422
  | 429
  | 500
  | 502
  | 503;

// Pagination types
export type PaginationParams = {
  page?: number;
  limit?: number;
  offset?: number;
  sort?: string;
  order?: 'asc' | 'desc';
};

export type PaginatedResponse<T> = {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
};

// Error response types
export type ApiError = {
  code: string;
  message: string;
  details?: string[];
  timestamp?: string;
  path?: string;
};

// Success response wrapper
export type ApiSuccess<T> = {
  success: true;
  data: T;
  timestamp?: string;
};

// Union type for all possible API responses
export type ApiResult<T> = ApiSuccess<T> | ApiError;

// Enhanced SimpleEndpoint type for better type safety
export type SimpleEndpoint<TBody = any, TResponse = any> = {
  name: string;
  path: string;
  method: HttpMethod;
  tags?: string[];
  description?: string;
  parameters?: Array<{
    name: string;
    location: ParameterLocation;
    required?: boolean;
    type: ParameterType;
    description?: string;
    example?: any;
    schema?: SchemaObject;
  }>;
  requestBody?: {
    schema: SchemaObject;
    required?: boolean;
    contentType?: string;
    example?: TBody;
  };
  responses: Array<{
    statusCode: number;
    description: string;
    schema?: string | SchemaObject;
    contentType?: string;
    example?: TResponse;
  }>;
};

// Utility types for extracting types from SimpleEndpoint
export type ExtractParams<T> = T extends SimpleEndpoint<any, any> ? any : never;
export type ExtractBody<T> = T extends SimpleEndpoint<infer B, any> ? B : never;
export type ExtractResponse<T> =
  T extends SimpleEndpoint<any, infer R> ? R : never;

// Base type for all mock files
export type MockDefinition<T extends SimpleEndpoint[] = SimpleEndpoint[]> = {
  endpoints: T;
  schemas?: Record<string, SchemaObject>;
};

// Type helper for creating strongly typed mock endpoints
export type TypedMockEndpoint<
  TName extends string,
  TPath extends string,
  TMethod extends HttpMethod,
  TBody = void,
  TResponse = void,
> = SimpleEndpoint<TBody, TResponse> & {
  name: TName;
  path: TPath;
  method: TMethod;
};

// Common endpoint patterns
export type GetEndpoint<TParams = any, TResponse = any> = SimpleEndpoint<
  never,
  TResponse
> & {
  method: 'get';
  pathParams?: TParams;
  queryParams?: Record<string, any>;
};

export type PostEndpoint<
  TBody = any,
  TResponse = any,
  TParams = any,
> = SimpleEndpoint<TBody, TResponse> & {
  method: 'post';
  pathParams?: TParams;
  queryParams?: Record<string, any>;
};

export type PutEndpoint<
  TBody = any,
  TResponse = any,
  TParams = any,
> = SimpleEndpoint<TBody, TResponse> & {
  method: 'put';
  pathParams?: TParams;
  queryParams?: Record<string, any>;
};

export type PatchEndpoint<
  TBody = any,
  TResponse = any,
  TParams = any,
> = SimpleEndpoint<TBody, TResponse> & {
  method: 'patch';
  pathParams?: TParams;
  queryParams?: Record<string, any>;
};

export type DeleteEndpoint<TResponse = any, TParams = any> = SimpleEndpoint<
  never,
  TResponse
> & {
  method: 'delete';
  pathParams?: TParams;
  queryParams?: Record<string, any>;
};

// React Query specific types for better integration
export type QueryEndpointConfig<
  TParams = void,
  TQueryParams = void,
  TResponse = any,
> = {
  pathParams?: TParams;
  queryParams?: TQueryParams;
  response: TResponse;
};

export type MutationEndpointConfig<
  TBody = void,
  TParams = void,
  TQueryParams = void,
  TResponse = any,
> = {
  body?: TBody;
  pathParams?: TParams;
  queryParams?: TQueryParams;
  response: TResponse;
};

// Utility types for extracting parameters from endpoint paths
export type ExtractPathParams<T extends string> =
  T extends `${infer _Start}:${infer Param}/${infer Rest}` // eslint-disable-line @typescript-eslint/no-unused-vars
    ? { [K in Param]: string } & ExtractPathParams<`/${Rest}`>
    : T extends `${infer _Start}:${infer Param}` // eslint-disable-line @typescript-eslint/no-unused-vars
      ? { [K in Param]: string }
      : {};

// Helper types for common API patterns
export type ListQuery<TItem = any, TFilters = any> = QueryEndpointConfig<
  void,
  PaginationParams & TFilters,
  PaginatedResponse<TItem>
>;

export type GetByIdQuery<TItem = any, TId = string> = QueryEndpointConfig<
  { id: TId },
  void,
  TItem
>;

export type CreateMutation<
  TInput = any,
  TOutput = any,
> = MutationEndpointConfig<TInput, void, void, TOutput>;

export type UpdateMutation<
  TInput = any,
  TOutput = any,
  TId = string,
> = MutationEndpointConfig<TInput, { id: TId }, void, TOutput>;

export type DeleteMutation<TId = string> = MutationEndpointConfig<
  void,
  { id: TId },
  void,
  { success: boolean }
>;

// Typed endpoint builders for React Query hooks
export type QueryEndpoint<
  TConfig extends QueryEndpointConfig = QueryEndpointConfig,
> = {
  method: 'get';
  buildUrl: (
    params?: TConfig['pathParams'],
    query?: TConfig['queryParams'],
  ) => string;
  parseResponse: (data: any) => TConfig['response'];
};

export type MutationEndpoint<
  TConfig extends MutationEndpointConfig = MutationEndpointConfig,
> = {
  method: 'post' | 'put' | 'patch' | 'delete';
  buildUrl: (
    params?: TConfig['pathParams'],
    query?: TConfig['queryParams'],
  ) => string;
  buildBody: (data?: TConfig['body']) => any;
  parseResponse: (data: any) => TConfig['response'];
};
