export default function Article() {
  return (
    <article className="grid" style={{ gap: 16, maxWidth: 820 }}>
      <h1>Streamlining Frontend Development with HFSA</h1>
      <p>
        As frontend projects expand, maintaining organization becomes challenging. Shared folders
        bloat, logic leaks into generic components, and onboarding slows down. HFSA (Hybrid Feature
        Scoped Architecture) addresses these issues with scope-based organization, feature-first
        vertical slicing, and an adapted use of Atomic Design.
      </p>
      <h2>Pain points</h2>
      <ul>
        <li>Overgrown shared directories and misplaced logic.</li>
        <li>Fragile changes that ripple across unrelated parts of the app.</li>
        <li>Distant data fetching/validation from the UIs they serve.</li>
      </ul>
      <h2>Benefits</h2>
      <ul>
        <li><strong>Predictability</strong>: consistent places for code.</li>
        <li><strong>Isolation</strong>: features own their flows end-to-end.</li>
        <li><strong>Scalability</strong>: add a folder, add a feature.</li>
        <li><strong>Testability</strong>: integration tests live nearby.</li>
        <li><strong>Consistency</strong>: purpose-driven naming.</li>
      </ul>
      <h2>Qualities</h2>
      <ul>
        <li>Clear boundaries and domain ownership (DDD inspiration).</li>
        <li>Single responsibility per folder.</li>
        <li>Tests near code, continuous feedback.</li>
        <li>Predictable file names: hooks.ts, utils.ts, types.ts, index.tsx.</li>
      </ul>
      <h2>Comparison</h2>
      <p>
        Like microservices for the frontend, HFSA encourages autonomy, but operates within a single
        codebase rather than distributed services.
      </p>
      <h2>Example structure</h2>
      <pre className="card" style={{ overflowX: 'auto' }}>{`/src
└─ /features/product-list
   ├─ index.tsx
   ├─ api/
   │  ├─ query.ts
   │  ├─ mock.ts
   │  ├─ mutation.ts
   │  └─ types.ts
   ├─ hooks.ts
   ├─ types.ts
   ├─ utils.ts
   ├─ styles.module.scss
   └─ test.spec.ts`}</pre>
      <p>
        HFSA is especially useful for mid-to-large projects and pairs well with Next.js App Router
        and vertical slicing.
      </p>
    </article>
  );
}

