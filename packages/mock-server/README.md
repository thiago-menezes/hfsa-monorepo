# @hfsa/mock-server

Mock server and API documentation package for HFSA monorepo using OpenAPI specifications.

## Features

- 🚀 Mock API server using Prism
- 📚 Interactive API documentation with Scalar
- 🔧 CLI for easy usage
- 🎯 Integration with HFSA monorepo structure

## Usage

### CLI Commands

```bash
# Start mock server (default port 4010)
npx hfsa-mock mock

# Start documentation server (default port 4011) 
npx hfsa-mock docs

# Start both servers
npx hfsa-mock start

# Specify custom ports and OpenAPI file
npx hfsa-mock mock --port 3001 --spec path/to/openapi.yaml
npx hfsa-mock docs --port 3002 --spec path/to/openapi.yaml
```

### Programmatic Usage

```typescript
import { MockServer, DocsServer } from '@hfsa/mock-server';

// Start mock server
const mockServer = new MockServer({
  port: 4010,
  specPath: './openapi.yaml'
});
await mockServer.start();

// Start documentation server
const docsServer = new DocsServer({
  port: 4011,
  specPath: './openapi.yaml'
});
await docsServer.start();
```

## Integration with Main App

The main app can use this package through workspace dependencies:

```json
{
  "dependencies": {
    "@hfsa/mock-server": "workspace:*"
  }
}
```

And update scripts to use the new package:

```json
{
  "scripts": {
    "dev:with-mock": "yarn workspace @hfsa/mock-server start:mock & yarn dev",
    "mock:server": "yarn workspace @hfsa/mock-server start:mock",
    "docs:api": "yarn workspace @hfsa/mock-server start:docs"
  }
}
```