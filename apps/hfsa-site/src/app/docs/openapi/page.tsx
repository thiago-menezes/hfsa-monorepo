export default function OpenAPI() {
  return (
    <article className="grid" style={{ gap: 16 }}>
      <h1>@hfsa/openapi-ts</h1>
      <p>
        Generates <code>OpenAPI 3.1</code> by discovering <code>src/features/**/mock.ts</code> files and
        converting their <code>SimpleEndpoint[]</code> into <code>paths</code> and <code>schemas</code>. The output is
        written to <code>public/openapi.yaml</code>.
      </p>
      <h2>How it works</h2>
      <ol>
        <li>Transpile mock TS files to JS into <code>.openapi-tmp/</code>.</li>
        <li>Load exported endpoints and merge into one spec.</li>
        <li>Write validated YAML to <code>public/openapi.yaml</code>.</li>
      </ol>
      <h2>Usage</h2>
      <pre className="card" style={{ overflowX: 'auto' }}>{`# from the repo root
pnpm -w --filter @hfsa/openapi-ts run build
pnpm -w --filter @hfsa/boilerplate run generate:openapi -- --root ../../apps/boilerplate`}</pre>
      <h2>Naming discussion</h2>
      <p>
        Current: <code>@hfsa/openapi-ts</code>. Alternatives that highlight intent:
      </p>
      <ul>
        <li><strong>@hfsa/openapi-from-mocks</strong> — descriptive and explicit.</li>
        <li><strong>@hfsa/mock2openapi</strong> — short, tool-like.</li>
        <li><strong>@hfsa/openapi-synth</strong> — evocative; synthesizes spec from mocks.</li>
        <li><strong>@hfsa/openapi-harvest</strong> — conveys collecting from features.</li>
      </ul>
      <p className="muted">We can rename later; for now, use the current package name in scripts.</p>
    </article>
  );
}

