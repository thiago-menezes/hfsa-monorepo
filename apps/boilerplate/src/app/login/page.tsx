import { Metadata } from 'next';

import { Login } from '@/features/login';

export const metadata: Metadata = {
  title: 'Hybrid Feature Scoped Archicteture',
};

export default function LoginPage() {
  return <Login />;
}
