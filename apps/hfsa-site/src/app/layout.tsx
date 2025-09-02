import type { Metadata } from 'next';
import './globals.css';
import { Nav } from './_components/Nav';
import { Footer } from './_components/Footer';

export const metadata: Metadata = {
  title: 'HFSA – Hybrid Feature Scoped Architecture',
  description: 'A pragmatic architecture for scalable frontend apps.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="container" style={{ paddingTop: 16, paddingBottom: 32 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

