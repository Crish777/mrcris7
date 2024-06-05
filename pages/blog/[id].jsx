import styles from '../../styles/BlogDetail.module.css';
import Footer from '../../components/Footer';
import Ukiyo from 'ukiyojs';
import { Audiowide } from '@next/font/google';
import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Loader from '../../components/Loader';
import { Contact } from '../../components/Contact';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import dynamic from 'next/dynamic';
import { MARKS } from '@contentful/rich-text-types';
import Link from 'next/link';

const Highlight = dynamic(() => import('react-highlight'), { ssr: false });

const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });

export async function getServerSideProps({ params }) {
  const query = `query {
    blog (id:"${params.id}") {
      contentfulMetadata{
        tags{
          name
        }
      }
      titleBlog
        contentBlog {
          json
        }
        miniatura {
          url
        }
        summary
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
  const blog = body.data.blog;

  return {
    props: {
      blog,
    },
  };
}

const DetailBlog = ({ blog }) => {
  const heroBlog = useRef(null);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    if (blog) {
      setLoader(false);
    }
    const images = document.querySelectorAll('.sectionPage img');
    new Ukiyo(images, {
      scale: 1.5,
      speed: 2,
      willChange: true,
      wrapperClass: 'ukiyo-wrapper',
      externalRAF: false,
    });
  }, [blog]);

  const options = {
    renderMark: {
      [MARKS.CODE]: (text) => {
        return (
          <Highlight
            className={`language-${blog.contentfulMetadata.tags[0].name}`}>
            {text}
          </Highlight>
        );
      },
    },
  };

  return (
    <>
      <Head>
        <title>{blog.titleBlog} | MrCris</title>
        <meta name="description" content={blog.summary} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon-red.webp" />
      </Head>
      <Loader active={loader ? 'show' : 'hide'} thanks={false} />
      <section
        className={`${styles.sectionBlogDetail} sectionPage`}
        data-scroll-section>
        <article className={`${styles.containerBlogDetail}`}>
          <div
            className={styles.heroDetailBlog}
            style={{
              backgroundImage: `url(${blog.miniatura.url})`,
            }}
            ref={heroBlog}
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed={-1.5}>
            <h1
              className={`${audiowide.className} ${styles.titleBlog}`}
              data-scroll
              data-scroll-direction="vertical"
              data-scroll-speed={2}>
              {blog.titleBlog}
            </h1>
          </div>
          <div className={`container ${styles.contentBlog}`}>
            {documentToReactComponents(blog.contentBlog.json, options)}
            <Link href="/blog" className={styles.returnToBlog}>
              <span className={'bg-ct backIcon'}></span> Todos los artículos{' '}
            </Link>
          </div>
        </article>

        <Contact audiowide={audiowide} />

        <Footer audiowide={audiowide} />
      </section>
    </>
  );
};

export default DetailBlog;
