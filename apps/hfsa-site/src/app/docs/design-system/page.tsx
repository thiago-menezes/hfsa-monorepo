export default function DesignSystem() {
  return (
    <article className="grid" style={{ gap: 16 }}>
      <h1>@hfsa/design-system</h1>
      <p>
        Minimal UI primitives to keep apps visually consistent. Keep business logic
        out of these components; let features compose them for behavior.
      </p>
      <h2>Usage</h2>
      <pre className="card" style={{ overflowX: 'auto' }}>{`import { Button, Heading, Input } from '@hfsa/design-system';

export default function Example() {
  return (
    <div>
      <Heading as="h2">Register</Heading>
      <Input placeholder="Email" />
      <Button>Continue</Button>
    </div>
  );
}`}</pre>
      <p className="muted">Add feature behavior via hooks and containers inside the feature folder.</p>
    </article>
  );
}

