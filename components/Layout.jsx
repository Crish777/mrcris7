import { SpeedInsights } from '@vercel/speed-insights/dist/next/index.mjs';
import { Analytics } from '@vercel/analytics/react';
import Footer from './Footer';
// import { Amatic_SC } from '@next/font/google';
import { Audiowide } from '@next/font/google';

const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Footer audiowide={audiowide} />
      <SpeedInsights />
      <Analytics />
    </>
  );
};

export default Layout;
