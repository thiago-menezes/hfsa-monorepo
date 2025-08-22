/**
 * Simplified API for OpenAPI generation
 */
import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';
import {
  OpenAPISpec,
  TypedEndpoint,
  SimpleEndpoint,
  OpenAPIGeneratorOptions,
} from './types';

/**
 * Options for OpenAPI generation
 */

/**
 * Default options for OpenAPI generation
 */
const defaultOptions: OpenAPIGeneratorOptions = {
  title: 'API Documentation',
  description: 'Generated API documentation',
  version: '1.0.0',
  servers: [
    {
      url: 'http://localhost:4010',
      description: 'Mock server',
    },
    {
      url: '/api',
      description: 'API server',
    },
  ],
  outputPath: path.join(process.cwd(), 'public/openapi-generated.yaml'),
  baseSchemas: {},
};

/**
 * Convert a typed endpoint definition to an OpenAPI path item
 */
function convertTypedEndpointToOpenAPI<
  Params = any,
  Body = any,
  Response = any,
>(endpoint: TypedEndpoint<Params, Body, Response>) {
  // Create parameters array for OpenAPI
  const parameters = endpoint.parameters?.map((param) => ({
    name: param.name,
    in: param.location,
    description: param.description,
    required: param.location === 'path' ? true : param.required,
    schema: {
      type: param.type,
      ...(param.example !== undefined ? { example: param.example } : {}),
      ...(param.schema ? param.schema : {}),
    },
  }));

  // Create request body if needed
  const requestBody = endpoint.requestBody
    ? {
        content: {
          [endpoint.requestBody.contentType || 'application/json']: {
            schema:
              typeof endpoint.requestBody.schema === 'string'
                ? { $ref: endpoint.requestBody.schema }
                : endpoint.requestBody.schema,
            ...(endpoint.requestBody.example
              ? { example: endpoint.requestBody.example }
              : {}),
          },
        },
        required: endpoint.requestBody.required !== false,
      }
    : undefined;

  // Create responses
  const responses = endpoint.responses.reduce(
    (acc, response) => {
      acc[response.statusCode] = {
        description: response.description,
        ...(response.schema || response.example
          ? {
              content: {
                [response.contentType || 'application/json']: {
                  ...(response.schema
                    ? {
                        schema:
                          typeof response.schema === 'string'
                            ? { $ref: response.schema }
                            : response.schema,
                      }
                    : {}),
                  ...(response.example ? { example: response.example } : {}),
                },
              },
            }
          : {}),
      };
      return acc;
    },
    {} as Record<string, any>,
  );

  // Create the OpenAPI path item
  return {
    [endpoint.path]: {
      [endpoint.method]: {
        tags: endpoint.tags || [],
        summary: endpoint.name,
        description: endpoint.description || endpoint.name,
        operationId: endpoint.name.replace(/\s+/g, ''),
        ...(parameters && parameters.length ? { parameters } : {}),
        ...(requestBody ? { requestBody } : {}),
        responses,
      },
    },
  };
}

/**
 * Generate OpenAPI specification from typed endpoint definitions
 */
export function generateOpenAPI<Params = any, Body = any, Response = any>(
  endpoints: TypedEndpoint<Params, Body, Response>[],
  options: Partial<OpenAPIGeneratorOptions> = {},
): void {
  // Merge options with defaults
  const mergedOptions = { ...defaultOptions, ...options };

  // Extract all unique tags from endpoints
  const uniqueTags = Array.from(
    new Set(endpoints.flatMap((endpoint) => endpoint.tags || [])),
  ).map((tag) => ({ name: tag, description: `Operations related to ${tag}` }));

  // Convert endpoints to OpenAPI paths
  const paths = endpoints.reduce(
    (acc, endpoint) => {
      const pathItem = convertTypedEndpointToOpenAPI(endpoint);
      return { ...acc, ...pathItem };
    },
    {} as Record<string, any>,
  );

  // Build the OpenAPI specification
  const openApiSpec: OpenAPISpec = {
    openapi: '3.1.1',
    info: {
      title: mergedOptions.title,
      description: mergedOptions.description || '',
      version: mergedOptions.version || '1.0.0',
      contact: {},
    },
    servers: mergedOptions.servers || defaultOptions.servers || [],
    paths,
    components: {
      schemas: { ...(mergedOptions.baseSchemas || {}) },
    },
    tags: uniqueTags,
  };

  // Ensure output directory exists
  const outputDir = path.dirname(mergedOptions.outputPath || '');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Convert to YAML and write to file
  const yamlString = yaml.dump(openApiSpec);
  fs.writeFileSync(mergedOptions.outputPath || '', yamlString, 'utf8');

  console.log('OpenAPI specification generated successfully!');
  console.log(`- YAML: ${mergedOptions.outputPath}`);
}

// Legacy function for backward compatibility
export function generateOpenAPILegacy(
  endpoints: any[],
  options: Partial<OpenAPIGeneratorOptions> = {},
): void {
  console.warn(
    'Warning: generateOpenAPILegacy is deprecated. Use generateOpenAPI instead.',
  );
  generateOpenAPI(endpoints, options);
}

// Re-export types for convenience
export type { SimpleEndpoint } from './types';

/**
 * Auto-discover and process all mock files in the project
 */
export async function processMockFiles(
  rootDir: string = process.cwd(),
  options: Partial<OpenAPIGeneratorOptions> = {},
): Promise<void> {
  const glob = require('glob');
  const ts: typeof import('typescript') = require('typescript');

  // Temp output dir for transpiled mocks
  const tmpDir = path.resolve(rootDir, '.openapi-tmp');
  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });

  // Find all mock.ts and *.mock.ts files
  const mockFiles = glob.sync('src/features/**/{mock.ts,*.mock.ts}', {
    cwd: rootDir,
  });

  if (mockFiles.length === 0) {
    console.warn(
      'No mock files found matching src/features/**/{mock.ts,*.mock.ts}',
    );
    return;
  }

  console.log(`Found ${mockFiles.length} mock files:`);
  mockFiles.forEach((file: string) => console.log(`  - ${file}`));

  // Import all endpoints from mock files
  const allEndpoints: SimpleEndpoint[] = [];

  for (const mockFile of mockFiles) {
    try {
      const fullPath = path.resolve(rootDir, mockFile);
      console.log(`  Transpiling: ${fullPath}`);

      // Read and transpile TS -> CJS JS
      const tsSource = fs.readFileSync(fullPath, 'utf8');
      const transpiled = ts.transpileModule(tsSource, {
        compilerOptions: {
          module: ts.ModuleKind.CommonJS,
          target: ts.ScriptTarget.ES2020,
          esModuleInterop: true,
          allowSyntheticDefaultImports: true,
          jsx: ts.JsxEmit.ReactJSX,
          skipLibCheck: true,
          resolveJsonModule: true,
          isolatedModules: true,
          importsNotUsedAsValues: ts.ImportsNotUsedAsValues.Remove,
          preserveValueImports: false,
        },
        fileName: fullPath,
        reportDiagnostics: false,
      });

      const rel = path.relative(rootDir, fullPath);
      const jsOutPath = path.join(tmpDir, rel.replace(/\.tsx?$/i, '.js'));
      const outDir = path.dirname(jsOutPath);
      if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(jsOutPath, transpiled.outputText, 'utf8');

      console.log(`  Loading: ${jsOutPath}`);
      delete require.cache[jsOutPath];
      const module = require(jsOutPath);
      const endpoints = module.default || module;

      if (Array.isArray(endpoints)) {
        allEndpoints.push(...endpoints);
        console.log(
          `  ✓ Loaded ${endpoints.length} endpoints from ${mockFile}`,
        );
      } else if (endpoints && typeof endpoints === 'object' && endpoints.path) {
        // Single endpoint object
        allEndpoints.push(endpoints);
        console.log(`  ✓ Loaded 1 endpoint from ${mockFile}`);
      } else {
        console.warn(`  ⚠ ${mockFile} does not export valid endpoint(s)`);
        console.log(`  ⚠ Exported:`, Object.keys(module));
      }
    } catch (error) {
      console.error(
        `  ✗ Failed to load ${mockFile}:`,
        (error as Error).message,
      );
      console.error(`  ✗ Stack:`, (error as Error).stack);
    }
  }

  if (allEndpoints.length === 0) {
    console.warn('No endpoints found in mock files');
    return;
  }

  console.log(`\nTotal endpoints found: ${allEndpoints.length}`);

  // Generate OpenAPI spec
  const mergedOptions = {
    title: 'Mock API Documentation',
    description: 'Auto-generated API documentation from mock files',
    version: '1.0.0',
    outputPath: path.join(rootDir, 'public/openapi.yaml'),
    ...options,
  };

  generateOpenAPI(allEndpoints, mergedOptions);
}

export default generateOpenAPI;
