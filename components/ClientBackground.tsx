'use client';

import dynamic from 'next/dynamic';

// only dynamic import here to avoid hydration issues
const BackgroundVideo = dynamic(() => import('./ui/BackgroundVideo'), {
  ssr: false,
});

export default function ClientBackground() {
  return <BackgroundVideo />;
}
