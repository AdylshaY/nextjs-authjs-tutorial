'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel } from './ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';
import Link from 'next/link';
import { login } from '@/actions/login';
import { SignInFormSchema } from '@/schemas';
import { useToast } from './ui/use-toast';
import { useRouter } from 'next/navigation';
import { startTransition, useTransition } from 'react';

const SignInForm = () => {
  const [isPending, setIsPending] = useTransition();

  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof SignInFormSchema>>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof SignInFormSchema>) => {
    const result = await login(values);
    if (result?.error) {
      toast({
        title: result.error,
        description: 'Please try again!',
        variant: 'destructive',
      });
    }
  };

  return (
    <Form {...form}>
      <form className='space-y-4' onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='example@mail.com' type='email' {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder='********' type='password' {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type='submit' className='w-full'>
          Login
        </Button>
      </form>
      <p className='text-muted-foreground text-sm text-center mt-4'>
        <span>Don&apos;t have an account?</span>{' '}
        <Link href='/register' className='text-foreground hover:underline'>
          Sign Up
        </Link>
      </p>
    </Form>
  );
};

export default SignInForm;
