'use client'; // Esto indica que es un componente de cliente

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation'; // Nuevo hook para el directorio `app`
import Script from 'next/script';
import * as fpixel from '../../utilidades/fpixel'; // Tu archivo de píxel

export function FacebookPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    fpixel.initFbPixel(); // Asegúrate de que el píxel esté inicializado
    // Disparar PageView en cada cambio de ruta en el cliente
    fpixel.pageview();
  }, [pathname, searchParams]); // Disparar en cambios de ruta/query

  return (
    <Script
      id="fb-pixel"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
        `, // PageView inicial se maneja en el useEffect
      }}
    />
  );
}