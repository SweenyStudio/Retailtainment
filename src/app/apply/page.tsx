'use client';

import Navbar from '@/components/sections/navbar';
import { sendGTMEvent } from '@next/third-parties/google';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';

export default function Apply() {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === '/apply') {
      sendGTMEvent({
        event: 'view_apply',
      });
    }
  }, [pathname]);

  return (
    <div className="bg-black">
      <Navbar />

      <div
        className="min-h-[650px] bg-white"
        data-tf-live="01HTEJR1GW5JCWPEY2P3J5KS7B"
      ></div>
      <Script src="//embed.typeform.com/next/embed.js"></Script>
    </div>
  );
}
