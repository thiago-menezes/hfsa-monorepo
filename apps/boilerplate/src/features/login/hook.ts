import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export const useLogin = () => {
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

  return { onSignIn, loading, error };
};
