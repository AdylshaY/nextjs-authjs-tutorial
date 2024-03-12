import React from 'react';
import { GithubIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from './ui/separator';

interface CardWrapperProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const CardWrapper = ({ title, description, children }: CardWrapperProps) => {
  return (
    <Card className='min-w-[400px]'>
      <CardHeader>
        <CardTitle className='text-center text-4xl'>{title}</CardTitle>
        <CardDescription className='text-center'>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <Separator className='mb-4' />
      <CardFooter className='flex flex-col items-center justify-center space-y-2'>
        <p className='text-muted-foreground text-sm'>
          Created by Adylsha Yumayev
        </p>
        <div className='space-x-4'>
          <Button
            variant='outline'
            size='icon'
            className='rounded-full text-muted-foreground'
            asChild
          >
            <Link href='https://github.com/AdylshaY' target='_blank'>
              <GithubIcon size={24} />
            </Link>
          </Button>
          <Button
            variant='outline'
            size='icon'
            className='rounded-full text-muted-foreground'
            asChild
          >
            <Link
              href='https://www.youtube.com/@AdylshasDevLab'
              target='_blank'
            >
              <YoutubeIcon size={24} />
            </Link>
          </Button>
          <Button
            variant='outline'
            size='icon'
            className='rounded-full text-muted-foreground'
            asChild
          >
            <Link href='https://www.linkedin.com/in/adylshay/' target='_blank'>
              <LinkedinIcon size={24} />
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
