import Link from 'next/link';

export default function Packages() {
  return (
    <article className="grid" style={{ gap: 16 }}>
      <h1>Repo Packages</h1>

      <section className="card">
        <h2>@hfsa/design-system</h2>
        <p className="muted">
          Shared UI primitives (Button, Heading, Input, etc.) for consistent
          visuals across apps. Keep these logic-free and reusable.
        </p>
        <p>
          Use from an app:{' '}
          <pre>
            <code>
              import &#123; Button, Heading &#125; from
              &#39;@hfsa/design-system&#39;
            </code>
          </pre>
        </p>
      </section>

      <section className="card">
        <h2>@hfsa/openapi-ts</h2>
        <p className="muted">
          Generates OpenAPI from feature mock definitions (
          <code>SimpleEndpoint[]</code>). It auto-discovers
          <code>src/features/**/mock.ts</code> and writes{' '}
          <code>public/openapi.yaml</code>.
        </p>
        <p>
          In <strong>@hfsa/boilerplate</strong>:{' '}
          <code>pnpm pregenerate:openapi</code> then{' '}
          <code>pnpm generate:openapi</code>.
        </p>
        <p>
          Naming ideas: <em>openapi-from-mocks</em>, <em>openapi-synth</em>,{' '}
          <em>mock2openapi</em>, <em>openapi-harvest</em>.
        </p>
        <p className="muted">
          See also: <Link href="/docs/openapi">OpenAPI generator details</Link>
        </p>
      </section>

      <section className="card">
        <h2>@hfsa/mock-server</h2>
        <p className="muted">
          Starts a local mock API (Prism) and an API docs server (Scalar) from
          the generated OpenAPI file.
        </p>
        <p>
          From <strong>@hfsa/boilerplate</strong>: <code>pnpm mock:api</code> to
          generate OpenAPI and run the mock server. Docs:{' '}
          <code>pnpm docs:api</code> or visit <code>/reference</code> in the
          app.
        </p>
        <p className="muted">
          More: <Link href="/docs/mock-server">Mock & docs server</Link>
        </p>
      </section>

      <p className="muted">
        Try the boilerplate + docs locally:{' '}
        <Link href="/playground">Playground</Link>
      </p>
    </article>
  );
}
