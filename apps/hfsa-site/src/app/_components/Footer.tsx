export function Footer() {
  return (
    <footer className="container" style={{ padding: "32px 0", marginTop: 48 }}>
      <div className="muted" style={{ fontSize: 13 }}>
        © {new Date().getFullYear()} HFSA. Hybrid Feature Scoped Architecture.
      </div>
    </footer>
  );
}

