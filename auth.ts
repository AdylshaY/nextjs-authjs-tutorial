import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { db } from './lib/prismaDb';
import authConfig from './auth.config';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
  unstable_update
} = NextAuth({
  pages: {
    signIn: '/login',
  },
  adapter: PrismaAdapter(db),
  callbacks: {
    async signIn({}) {
      return true;
    },
  },
  session: { strategy: 'jwt' },
  secret: 'my-secret-1234-5678-9012-3456',
  ...authConfig,
});
