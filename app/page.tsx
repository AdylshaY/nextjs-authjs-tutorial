import CardWrapper from '@/components/card-wrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <CardWrapper
      title='Auth.js Tutorial'
      description='Authentication tutorial for Next.js with Authjs.'
    >
      <div className='flex flex-col space-y-4'>
        <Button asChild>
          <Link href='/login'>Login</Link>
        </Button>
        <Button asChild>
          <Link href='/register'>Register</Link>
        </Button>
        <Button asChild>
          <Link href='/profile'>Profile</Link>
        </Button>
      </div>
    </CardWrapper>
  );
}
