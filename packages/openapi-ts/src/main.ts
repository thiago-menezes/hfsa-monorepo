/**
 * Main OpenAPI specification generator using simplified API
 * Auto-discovers and processes all mock files in the project
 */
import path from 'path';
import { processMockFiles } from './simplified';

// Very small CLI arg parser (supports --root <path>)
function getArg(flag: string): string | undefined {
  const idx = process.argv.indexOf(flag);
  if (idx !== -1 && idx + 1 < process.argv.length) return process.argv[idx + 1];
  return undefined;
}

// Determine target project root (default to current working directory)
const cliRoot = getArg('--root');
const envRoot = process.env.HFSA_OPENAPI_ROOT;
const projectRoot = cliRoot
  ? path.resolve(process.cwd(), cliRoot)
  : envRoot
    ? path.resolve(process.cwd(), envRoot)
    : process.cwd();

// Process all mock files and generate OpenAPI spec
processMockFiles(projectRoot, {
  title: 'HFSA Mock API',
  description:
    'Auto-generated API documentation from feature mock files using HFSA architecture',
  version: '1.0.0',
  servers: [
    {
      url: 'http://localhost:4010',
      description: 'Prism mock server',
    },
    {
      url: '/api',
      description: 'Next.js API routes',
    },
  ],
})
  .then(() => {
    console.log('✅ OpenAPI specification generated successfully!');
    console.log('📄 Generated file: public/openapi.yaml');
    console.log(
      '🚀 You can now use this with Scalar documentation or Prism mock server',
    );
  })
  .catch((error) => {
    console.error('❌ Failed to generate OpenAPI specification:', error);
    process.exit(1);
  });
