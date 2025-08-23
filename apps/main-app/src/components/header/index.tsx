import { auth, signOut } from '@/libs/auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export const Header = async () => {
  const session = await auth();

  return (
    <header className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold">HFSA Demo</h1>
      <div className="space-x-3 text-sm">
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
            <button className="underline" type="submit">
              Sign out ({session.user?.email ?? 'account'})
            </button>
          </form>
        ) : (
          <Link href="/login" className="underline">
            Sign in
          </Link>
        )}
      </div>
    </header>
  );
};
