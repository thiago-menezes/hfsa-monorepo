'use client';

import { Button } from '@hfsa/design-system';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import styles from './styles.module.css';

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
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Sign in</h1>
        {error ? <p className={styles.error}>{error}</p> : null}
        <Button type="button" onClick={onSignIn} disabled={loading}>
          {loading ? 'Redirecting…' : 'Sign in with Auth0'}
        </Button>
        <p className={styles.description}>
          Go back to{' '}
          <Link href="/" className={styles.link}>
            Home
          </Link>
        </p>
      </div>
    </div>
  );
};
