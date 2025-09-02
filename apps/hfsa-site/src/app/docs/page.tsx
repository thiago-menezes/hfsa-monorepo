import Link from 'next/link';

export default function DocsIndex() {
  return (
    <article className="grid" style={{ gap: 16 }}>
      <h1>HFSA Overview</h1>
      <p>
        HFSA (Hybrid Feature Scoped Architecture) is a pragmatic way to organize
        large frontend applications. It blends scope-based organization, feature-based
        vertical slices, and a constrained use of Atomic Design for truly logic-free
        UI pieces.
      </p>
      <h2>Why HFSA?</h2>
      <ul>
        <li><strong>Predictability</strong>: clear, repeatable places for UI, hooks, validation, and tests.</li>
        <li><strong>Isolation</strong>: each feature owns its end-to-end flow, reducing cross-talk.</li>
        <li><strong>Scalability</strong>: add a feature by adding a folder — keep growth linear.</li>
        <li><strong>Testability</strong>: co-locate integration tests to shorten feedback loops.</li>
        <li><strong>Consistency</strong>: name by purpose (hooks.ts, utils.ts, index.tsx) over ad-hoc categories.</li>
      </ul>
      <h2>When to use</h2>
      <p>
        HFSA shines in mid-to-large apps, especially when teams outgrow a single shared
        components folder and need dependable boundaries for domains.
      </p>
      <p className="muted">
        Deep dive: <Link href="/docs/architecture">Architecture & structure</Link> ·{' '}
        <Link href="/docs/packages">Repo packages</Link>
      </p>
    </article>
  );
}

