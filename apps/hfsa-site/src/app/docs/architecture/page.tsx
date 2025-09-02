export default function Architecture() {
  return (
    <article className="grid" style={{ gap: 16 }}>
      <h1>Architecture & Structure</h1>
      <p>
        HFSA takes three pillars and applies them to the app layer:
      </p>
      <ol>
        <li><strong>Scope-driven boundaries</strong>: align folders to domains and responsibilities.</li>
        <li><strong>Feature-first slicing</strong>: keep UI, data, validation, and tests together.</li>
        <li><strong>Atomic Design (restricted)</strong>: only for stateless, logic-free UI primitives.</li>
      </ol>
      <h2>Recommended layout (Next.js App Router)</h2>
      <pre className="card" style={{ overflowX: 'auto' }}>{`/src
└─ /app
   ├─ (auth)/
   │  ├─ page.tsx
   │  └─ layout.tsx
   ├─ /_components            # shared, logic-free UI only
   ├─ /login/page.tsx
   ├─ /providers.tsx
   └─ /features
      └─ /product-list
         ├─ index.tsx         # feature screen/entry
         ├─ hooks.ts          # feature hooks
         ├─ utils.ts          # feature utilities
         ├─ types.ts          # feature types
         ├─ styles.module.scss
         ├─ api/
         │  ├─ query.ts       # react-query fetchers
         │  ├─ mutation.ts    # create/update/delete
         │  ├─ mock.ts        # SimpleEndpoint[] mocks
         │  └─ types.ts
         └─ test.integration.spec.tsx`}</pre>

      <h2>Naming conventions</h2>
      <ul>
        <li><strong>Components</strong>: PascalCase.tsx</li>
        <li><strong>Utilities</strong>: camelCase.ts</li>
        <li><strong>Routes</strong>: kebab-case in <code>app/</code></li>
        <li><strong>CSS</strong>: <code>*.module.css|scss</code> local to component/feature</li>
      </ul>
    </article>
  );
}

