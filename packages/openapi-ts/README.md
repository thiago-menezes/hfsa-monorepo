# @hfsa/openapi-ts

OpenAPI generator that scans app feature mocks and outputs `public/openapi.yaml`.

## Usage

Monorepo (recommended):
- From your app (e.g., `apps/main-app`), add:
  - `"generate:openapi": "yarn workspace @hfsa/openapi-ts generate -- --root ../../apps/main-app"`
- Run: `yarn generate:openapi` (from the app or repo root).

Alternative (binary from the app):
- Add `@hfsa/openapi-ts` as a dev dependency of your app, then run:
  - `hfsa-openapi` or `yarn hfsa-openapi`

CLI options:
- `--root <path>`: target app root (defaults to current working directory)
- `HFSA_OPENAPI_ROOT=<path>`: same as `--root` via env var

## Commands
- `yarn build` – compile TS to `dist/`
- `yarn dev` – compile in watch mode
- `yarn generate` – run the generator (respects `--root`)

## How it works
- Discovers mock definitions in `src/features/**/{mock.ts,*.mock.ts}` of the target app.
- Builds an OpenAPI 3.1 spec and writes `public/openapi.yaml`.
- Use with Prism: `prism mock public/openapi.yaml -p 4010`.

## Mock file shape
Export an array of endpoints or a single endpoint. See `src/types.ts` for full types.

```ts
export default [
  {
    name: 'List products',
    path: '/products',
    method: 'get',
    tags: ['products'],
    responses: [
      { statusCode: 200, description: 'OK', example: [{ id: 1 }] },
    ],
  },
];
```
