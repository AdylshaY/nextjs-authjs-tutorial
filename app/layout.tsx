import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/auth';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Authjs Tutorial',
  description: 'Authjs Tutorial for Next.js',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang='en'>
        <body
          className={cn(inter.className, 'flex items-center justify-center')}
        >
          {children}
          <Toaster />
        </body>
      </html>
    </SessionProvider>
  );
}
