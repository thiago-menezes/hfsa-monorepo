import type { DefaultSession } from 'next-auth';
import type { SessionUser } from '@/libs/types';

declare module 'next-auth' {
  interface Session {
    user: SessionUser & (DefaultSession['user'] extends infer U ? U : {});
    accessToken?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: string;
    user?: SessionUser;
  }
}
