import { Rasa } from "@next/font/google";
import Layout from "../components/Layout";
import { LocomotiveScrollProvider as RLSProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import "../styles/globals.css";
import { useRef } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import { Audiowide } from "@next/font/google";

const audiowide = Audiowide({ weight: '400', subsets: ["latin"] });

const rasa = Rasa({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const { asPath } = useRouter(); // With next/router
  const containerRef = useRef(null);
  return (
    <RLSProvider
      options={{
        smooth: true,
        smoothMobile: false,
        resetNativeScroll: true
        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      location={asPath}
      onLocationChange={(scroll) => scroll.scrollTo(0, { duration: 0, disableLerp: true })}
      containerRef={containerRef}
    >
      <main
        className={`${rasa.className} ${"container"}`}
        data-scroll-container
        ref={containerRef}
      >
        <Header audiowide={audiowide}/>
        {/* <div data-scroll-section> */}
          {/* <Layout> */}
            <Component {...pageProps} />
          {/* </Layout> */}
        {/* </div> */}
      </main>
    </RLSProvider>
  );
}
