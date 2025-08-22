'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    // console.error(error);
  }, [error]);

  return (
    <main className="p-6 grid place-items-center min-h-[60vh] text-center">
      <div>
        <h1 className="text-2xl font-semibold mb-2">Something went wrong</h1>
        <p className="text-gray-600 mb-6">Please try again.</p>
        <button
          type="button"
          onClick={() => reset()}
          className="text-blue-600 hover:underline"
        >
          Retry
        </button>
      </div>
    </main>
  );
}
