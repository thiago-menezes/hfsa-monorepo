'use client';

import { Button } from '@hfsa/design-system';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSignIn = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await signIn('auth0', {
        redirect: false,
        callbackUrl: '/',
        prompt: 'login',
      });
      if (res?.error) {
        setError('Sign-in failed');
      } else if (res?.url) {
        window.location.assign(res.url);
      } else {
        router.push('/');
        router.refresh();
      }
    } catch {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-4 border p-6 rounded">
        <h1 className="text-xl font-semibold">Sign in</h1>
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
        <Button type="button" onClick={onSignIn} disabled={loading}>
          {loading ? 'Redirecting…' : 'Sign in with Auth0'}
        </Button>
        <p className="text-sm text-gray-600">
          Go back to{' '}
          <Link href="/" className="underline">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
};
