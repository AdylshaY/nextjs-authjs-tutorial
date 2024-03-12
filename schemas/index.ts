import * as z from 'zod';

export const SignInFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const SignUpFormSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });
