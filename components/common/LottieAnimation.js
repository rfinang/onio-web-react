import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
});

export default function LottieAnimation({ urlData }) {
  const [data, setData] = useState();
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(async () => {
    if (!urlData) return;
    try {
      let obj = await (await fetch(urlData)).json();
      setData(obj);
    } catch (error) {
      console.error('Failed to load Lottie animation:', error);
    }
  }, [urlData]);

  if (!isClient) {
    return <div style={{ minHeight: '100px' }}></div>; // Placeholder for SSR
  }

  return data ? <Lottie animationData={data} loop={false} /> : null;
}
