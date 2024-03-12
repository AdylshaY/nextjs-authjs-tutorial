'use client';

import { logout } from '@/actions/logout';
import CardWrapper from '@/components/card-wrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const ProfilePage = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <CardWrapper
        title='Not Logged In'
        description='You need to be logged in to view this page.'
      >
        <Button asChild className='w-full'>
          <Link href='/'>Back To Home</Link>
        </Button>
      </CardWrapper>
    );
  }

  return (
    <CardWrapper title='Your Profile' description='Manage your profile.'>
      <div className='space-y-4'>
        <div>
          <h2 className='text-lg font-semibold'>Profile Information</h2>
          <p className='text-sm text-gray-500'>
            Update your profile information and manage your account.
          </p>
        </div>
        <Input disabled value={session.user?.name || ''} />
        <Input disabled value={session.user?.email || ''} />
        <Button
          variant='destructive'
          className='w-full'
          onClick={() => logout()}
        >
          Logout
        </Button>
      </div>
    </CardWrapper>
  );
};

export default ProfilePage;
