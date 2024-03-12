'use server';

import { SignUpFormSchema } from '@/schemas';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import { db } from '@/lib/prismaDb';
import { redirect } from 'next/navigation';

export const register = async (data: z.infer<typeof SignUpFormSchema>) => {
  const validateFields = SignUpFormSchema.safeParse(data);

  if (!validateFields.success) {
    return { error: 'Invalid fields' };
  }

  const { email, password, name } = data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await db.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return { error: 'User already exists' };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  redirect('/login');
};
