import CardWrapper from '@/components/card-wrapper';
import SignInForm from '@/components/signin-form';
import React from 'react';

const LoginPage = () => {
  return (
    <CardWrapper
      title='Sign In'
      description='Sign in to your account to continue.'
    >
      <SignInForm />
    </CardWrapper>
  );
};

export default LoginPage;
