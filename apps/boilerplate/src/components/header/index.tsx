import { auth, signOut } from '@/libs/auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import styles from './styles.module.css';

export const Header = async () => {
  const session = await auth();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>HFSA Demo</h1>
      <div className={styles.nav}>
        {session ? (
          <form
            action={async () => {
              'use server';

              await signOut({ redirect: false });

              const returnTo = process.env.AUTH_URL;
              const domain = (process.env.AUTH0_ISSUER || '').replace(
                /\/$/,
                '',
              );
              const clientId = process.env.AUTH0_ID;

              if (domain && clientId && returnTo) {
                const url = `${domain}/v2/logout?client_id=${encodeURIComponent(
                  clientId,
                )}&returnTo=${encodeURIComponent(returnTo)}`;
                redirect(url);
              }

              redirect('/');
            }}
          >
            <button className={styles.button} type="submit">
              Sign out ({session.user?.email ?? 'account'})
            </button>
          </form>
        ) : (
          <Link href="/login" className={styles.link}>
            Sign in
          </Link>
        )}
      </div>
    </header>
  );
};
