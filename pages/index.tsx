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
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HomeProps } from 'interfaces/HomeInterfaces';

const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });
const amaticsc = Amatic_SC({ weight: ['400', '700'], subsets: ['latin'] });

export async function getServerSideProps() {
  const query = `query {
    projectCollection{
      items{
        name
        sys{
          id
        }        
        projectMediaCollection{
          items{
            url
            title
            sys{
              id
            }
          }
        }
        url
        description{
          json
        }
      }
    }
  }`;
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}/environments/master`,
    {
      headers: {
        'Authorization': `Bearer ${process.env.ACCES_TOKEN}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ query }),
    }
  );
  const body = await response.json();
  const projects = body.data.projectCollection.items;
  return {
    props: {
      projects,
    },
  };
}

export default function Home({ projects, isError }: HomeProps) {
  const [loader, setLoader] = useState<boolean>(true);
  const [thanksView, setThanksView] = useState(false);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  useEffect(() => {
    if (projects || projects === undefined) {
      // setTimeout(() => {
      setLoader(false);
      setTimeout(() => {
        AOS.init();
      }, 1500);
      // }, 100);
    }
  }, [projects]);
  if (isError) {
    return <div></div>;
  }

  return (
    <>
      <Head>
        <title>Home | MrCris</title>
        <meta name="description" content="Desarrollador frontend creativo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon-red.webp" />
      </Head>
      <Loader active={loader ? 'show' : 'hide'} thanks={thanksView} />
      <div data-scroll-section>
        <Hero
          audiowide={audiowide}
          amaticsc={amaticsc}
          setIsPopUpOpen={setIsPopUpOpen}
        />
        <Banner />
        <Briefcase audiowide={audiowide} projects={projects} />
        <About audiowide={audiowide} />
        <Contact
          audiowide={audiowide}
          setLoader={setLoader}
          setThanksView={setThanksView}
          isPopUp={false}
        />
        <Footer audiowide={audiowide} />
      </div>
      {isPopUpOpen && (
        <Contact
          audiowide={audiowide}
          setLoader={setLoader}
          setThanksView={setThanksView}
          isPopUp={isPopUpOpen}
          setIsPopUpOpen={setIsPopUpOpen}
        />
      )}
    </>
  );
}
