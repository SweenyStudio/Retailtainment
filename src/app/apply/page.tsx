'use client';

import Navbar from '@/components/sections/navbar';
import { sendGTMEvent } from '@next/third-parties/google';
import { Widget } from '@typeform/embed-react';
import { usePathname } from 'next/navigation';
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
      <Widget id="CpKOxivA" className="min-h-[650px] bg-white" />
    </div>
  );
}
