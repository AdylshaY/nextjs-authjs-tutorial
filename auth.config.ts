import { NextAuthConfig } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

import { SignInFormSchema } from '@/schemas';
import { db } from './lib/prismaDb';

export default {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const valid = await SignInFormSchema.safeParseAsync(credentials);

        if (valid.success) {
          const { email, password } = valid.data;

          const user = await db.user.findUnique({
            where: { email },
          });

          if (!user) return null;

          const validPassword = await bcrypt.compare(password, user.password);
          
          if (validPassword) return user;

          return null;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
