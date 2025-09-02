"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const link = (href: string, label: string, pathname: string) => (
  <Link
    key={href}
    href={href}
    className={clsx(
      "muted",
      {
        active: pathname === href,
      }
    )}
    style={{
      padding: "8px 10px",
      borderRadius: 8,
      border: pathname === href ? "1px solid rgba(255,255,255,0.18)" : "1px solid transparent",
      color: pathname === href ? "#fff" : undefined,
      background: pathname === href ? "rgba(255,255,255,0.06)" : "transparent",
    }}
  >
    {label}
  </Link>
);

export function Nav() {
  const pathname = usePathname();
  return (
    <nav className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 0" }}>
      <Link href="/" className="pill" style={{ fontWeight: 700 }}>
        hfsa
        <span style={{ opacity: 0.75, fontWeight: 500 }}>
          Hybrid Feature Scoped Architecture
        </span>
      </Link>
      <div style={{ display: "flex", gap: 12 }}>
        {link("/docs", "Docs", pathname)}
        {link("/docs/architecture", "Architecture", pathname)}
        {link("/docs/packages", "Packages", pathname)}
        {link("/playground", "Playground", pathname)}
      </div>
    </nav>
  );
}

