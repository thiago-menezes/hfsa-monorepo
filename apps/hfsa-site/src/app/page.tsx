import Link from 'next/link';

export default function Page() {
  return (
    <div className="grid" style={{ gap: 28 }}>
      <section className="card" style={{ padding: 28 }}>
        <div className="pill">hfsa · Hybrid Feature Scoped Architecture</div>
        <h1 style={{ fontSize: 40, margin: '14px 0 8px', lineHeight: 1.1 }}>
          Streamline frontend at scale with clear boundaries and vertical slices
        </h1>
        <p className="muted" style={{ maxWidth: 780, marginTop: 8 }}>
          HFSA blends scope-based organization, feature-first architecture, and a pragmatic
          take on Atomic Design to keep large apps predictable, testable, and easy to evolve.
        </p>
        <div className="ctaRow" style={{ marginTop: 16 }}>
          <Link className="cta" href="/docs">Read the Guide</Link>
          <Link className="cta secondary" href="/docs/architecture">See the Structure</Link>
          <Link className="cta secondary" href="/playground">Open the Playground</Link>
        </div>
      </section>

      <section className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        <div className="card">
          <h3>Predictable</h3>
          <p className="muted">Know where everything lives: UI, API hooks, validation, and tests stay with their feature.</p>
        </div>
        <div className="card">
          <h3>Isolated</h3>
          <p className="muted">Features are vertical slices with clear ownership and minimal cross-coupling.</p>
        </div>
        <div className="card">
          <h3>Scalable</h3>
          <p className="muted">Add new capability by adding a folder — not navigating a fragile shared abyss.</p>
        </div>
        <div className="card">
          <h3>Test-friendly</h3>
          <p className="muted">Co-locate tests and keep feedback loops short for confident refactors.</p>
        </div>
      </section>

      <section className="card">
        <h2>Packages in this repo</h2>
        <ul>
          <li><strong>@hfsa/design-system</strong> · shared UI primitives for apps</li>
          <li><strong>@hfsa/openapi-ts</strong> · generate OpenAPI from feature mocks</li>
          <li><strong>@hfsa/mock-server</strong> · local mock + docs servers</li>
        </ul>
        <div className="ctaRow" style={{ marginTop: 8 }}>
          <Link className="cta secondary" href="/docs/packages">Learn more</Link>
        </div>
      </section>
    </div>
  );
}

