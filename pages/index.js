import Head from 'next/head';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Briefcase from '../components/Briefcase';
import About from '../components/About';
import { Contact } from '../components/Contact';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import { Amatic_SC } from '@next/font/google';
import { Audiowide } from '@next/font/google';
import { useEffect, useState } from 'react';

const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });
const amaticsc = Amatic_SC({ weight: ['400', '700'], subsets: ['latin'] });

export default function Home({ projects }) {
  const [loader, setLoader] = useState(true);
  const [thanksView, setThanksView] = useState(false);



  useEffect(() => {
    if (projects) {
      setTimeout(() => {
        setLoader(false);
      }, 2000);
    }
  }, []);

  return (
    <>
      <Head>
        <title>MrCris7</title>
        <meta name="description" content="Desarrollador frontend creativo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Loader active={loader ? 'show' : 'hide'} thanks={thanksView} />
      <div data-scroll-section>
        <Hero amaticsc={amaticsc} setLoader={setLoader} />
        <Banner />
        <Briefcase audiowide={audiowide} projects={projects} />
        <About audiowide={audiowide} />
        <Contact
          audiowide={audiowide}
          setLoader={setLoader}
          setThanksView={setThanksView}
        />
        <Footer audiowide={audiowide} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const url = `${process.env.STRAPI_URL}/allprojects?populate=images`;
    const response = await fetch(url);
    const projects = await response.json();

    return {
      props: {
        projects: projects.data,
      },
    };
  } catch (error) {
    return {
      props: {
        isError: 'error',
      },
    };
  }
}
