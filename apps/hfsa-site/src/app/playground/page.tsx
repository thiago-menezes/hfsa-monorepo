import Link from 'next/link';

export default function Playground() {
  return (
    <article className="grid" style={{ gap: 16 }}>
      <h1>Playground</h1>
      <p>
        This monorepo includes a working Next.js app (<strong>@hfsa/boilerplate</strong>) that
        demonstrates HFSA’s vertical slices, mocks to OpenAPI, and live API docs.
      </p>
      <h2>Run locally</h2>
      <pre className="card" style={{ overflowX: 'auto' }}>{`# 1) start the app
pnpm dev:main

# 2) generate OpenAPI and run mock server (in another terminal)
pnpm mock

# 3) view API reference (served by the app via Scalar)
open http://localhost:3000/reference`}</pre>
      <p className="muted">
        You can inspect feature mocks under <code>apps/boilerplate/src/features/**/mock.ts</code>.
      </p>
      <p>
        Read about packages: <Link href="/docs/packages">Repo packages</Link>
      </p>
    </article>
  );
}

