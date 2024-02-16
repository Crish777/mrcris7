import { Rasa } from '@next/font/google';
// import { LocomotiveScrollProvider as RLSProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import '../styles/globals.css';
// import { useRouter } from 'next/router';
import Header from '../components/Header';
import { Audiowide } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { useEffect, useRef } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { hotjar } from 'react-hotjar';
import Script from 'next/script';

const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });

const rasa = Rasa({ weight: '400', subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  const containerRef = useRef(null);

  useEffect(() => {
    hotjar.initialize(3826559, 6);
  }, []);
  return (
    <>
      <Script
        id="srcGoogleAnalytics"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="noscr" strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                `}
      </Script>
      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        crossOrigin="anonymous"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5078516624755088"
      />
      {/*<RLSProvider
        options={{
          smooth: true,
          smoothMobile: false,
          resetNativeScroll: true,
          lerp: 0.08,
          multiplier: 1,
          firefoxMultiplier: 1,
          touchMultiplier: 0.1,
          smartPhone: {
            smooth: false,
          },
          tablet: {
            smooth: false,
          },
          scrollFromAnywhere: true,
          // ... all available Locomotive Scroll instance options
        }}
        watch={
          [
            // ..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        location={asPath}
        onLocationChange={(scroll) =>
          scroll.scrollTo(0, { duration: 0, disableLerp: true })
        }
        containerRef={containerRef}> */}
        <main
          className={`${rasa.className} siteMain ${'container'}`}
          data-scroll-container
          ref={containerRef}>
          <Header audiowide={audiowide} />
          <Component {...pageProps} />
          <SpeedInsights />
        </main>
      {/* </RLSProvider> */}
      <Analytics />
    </>
  );
}
