import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';
import { Header } from '@/components/header';
import { auth } from '@/libs/auth';

export default async function AuthLayout({ children }: PropsWithChildren) {
  const session = await auth();

  if (!session) {
    redirect('/login');
  }

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
