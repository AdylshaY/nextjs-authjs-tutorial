import CardWrapper from '@/components/card-wrapper';
import SignUpForm from '@/components/signup-form';
import React from 'react';

const RegisterPage = () => {
  return (
    <CardWrapper title='Sign Up' description='Sign up to create an account.'>
      <SignUpForm />
    </CardWrapper>
  );
};

export default RegisterPage;
