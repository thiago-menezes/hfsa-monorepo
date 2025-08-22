import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="p-6 grid place-items-center min-h-[60vh] text-center">
      <div>
        <h1 className="text-2xl font-semibold mb-2">Page not found</h1>
        <p className="text-gray-600 mb-6">
          The page you’re looking for doesn’t exist.
        </p>
        <Link href="/" className="text-blue-600 hover:underline">
          Go back home
        </Link>
      </div>
    </main>
  );
}
