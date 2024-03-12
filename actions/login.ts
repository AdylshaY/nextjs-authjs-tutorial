'use server';

import { SignInFormSchema } from '@/schemas';
import { signIn } from '@/auth';
import * as z from 'zod';
import { AuthError } from 'next-auth';

export const login = async (values: z.infer<typeof SignInFormSchema>) => {
  const { email, password } = values;

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: '/profile',
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials!' };
        default:
          return { error: 'Something went wrong!' };
      }
    }

    throw error;
  }
};
