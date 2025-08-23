'use client';

import { Button } from '@hfsa/design-system';
import Link from 'next/link';
import styles from './styles.module.scss';
import { useLogin } from './hook';

export const Login = () => {
  const { onSignIn, loading, error } = useLogin();

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
