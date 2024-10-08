import Footer from '@/components/sections/footer';
import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { redirect } from 'next/navigation'; // Import the redirect function
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'RETAILTAINMENT | Ecommerce & Retail Accelerator',
  description: `Elevating today's visionaries into tomorrow's market leaders. We're here to transform your brand's potential into unparalleled growth and success.`,
};

const gothicRegular = localFont({
  src: [
    {
      path: '../styles/fonts/ITC_Avant_Garde_Gothic_Bold_Condensed.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../styles/fonts/ITC_Avant_Garde_Gothic_Book_Condensed.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../styles/fonts/ITC_Avant_Garde_Gothic_Demi_Condensed.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../styles/fonts/ITC_Avant_Garde_Gothic_Medium_Condensed.otf',
      weight: '500',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-gothic',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Perform a server-side redirect here
  redirect('https://onelifeclub.com/'); // Redirect to your desired URL

  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-KFPKWBMH" />
      <body
        className={`${gothicRegular.variable} ${inter.variable} font-sans overscroll-none bg-black`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
