import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import './globals.css';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'SeaBuggy',
  description: 'Cryptocurrency Portfolio Rebalancing tool',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(dmSans.className, 'bg-[#EAF1FF]')}>
        {children}
      </body>
    </html>
  );
}
