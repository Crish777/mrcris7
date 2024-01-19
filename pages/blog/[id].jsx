import styles from '../../styles/BlogDetail.module.css';
import Footer from '../../components/Footer';
import Ukiyo from 'ukiyojs';
import { Audiowide } from '@next/font/google';
import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Loader from '../../components/Loader';
import { Contact } from '../../components/Contact';
import { createClient } from 'contentful';

const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });

// export async function getStaticPaths() {
//   return {
//     paths: [
//       // String variant:
//       '/blog/[id]',
//       // Object variant:
//       { params: { slug: 'id' } },
//     ],
//     fallback: true,
//   };
// }

export async function getServerSideProps({ params }) {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCES_TOKEN,
  });

  const res = await client.getEntries({
    content_type: 'blog',
    'sys.id': params.id,
  });

  return {
    props: {
      blog: res.items[0],
    },
  };
}

const DetailBlog = ({ blog }) => {
  const heroBlog = useRef(null);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    if (blog) {
      setTimeout(() => {
        setLoader(false);
      }, 2000);
      console.log(blog);
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
  console.log(blog);

  return (
    <>
      <Head>
        <title>{blog.fields.titleBlog} | MrCris</title>
        <meta name="description" content={blog.fields.summary} />
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
              backgroundImage: `url(https://${blog.fields.miniatura.fields.file.url})`,
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
              {blog.fields.titleBlog}
            </h1>
          </div>

          <div className={`container ${styles.contentBlog}`}>
            {blog.fields.contentBlog.content.map((content) => (
              <>
                {content.nodeType === 'paragraph' &&
                  (content.content.length ? (
                    <div className={styles.inlineParagraphGroup}>
                      {content.content.map((text) => (
                        <>
                          {text.nodeType === 'text' && (
                            <span className={styles.inlineParagraph}>
                              {text.value}
                            </span>
                          )}{' '}
                          {text.nodeType === 'hyperlink' && (
                            <a
                              target="_blank"
                              rel="opener noreferrer"
                              href={text.data.uri}>
                              {text.content[0].value}
                            </a>
                          )}
                        </>
                      ))}
                    </div>
                  ) : (
                    <p className={styles.oneBlock}>
                      {content.content[0].value}
                    </p>
                  ))}
                {content.nodeType === 'heading-2' && (
                  <h2>{content.content[0].value}</h2>
                )}
                {content.nodeType === 'heading-3' && (
                  <h3>{content.content[0].value}</h3>
                )}
                {content.nodeType === 'heading-4' && (
                  <h4>{content.content[0].value}</h4>
                )}
                {content.nodeType === 'ordered-list' && (
                  <ol>
                    {content.content.map((liContent) => (
                      <li key={liContent}>
                        {liContent.content[0].content[0].value && (
                          <span>{liContent.content[0].content[0].value}</span>
                        )}
                        {liContent.content[0].content[1].value && (
                          <span>{liContent.content[0].content[1].value}</span>
                        )}
                      </li>
                    ))}
                  </ol>
                )}
                {content.nodeType === 'unordered-list' && (
                  <ul>
                    {content.content.map((liContent) => (
                      <li key={liContent}>
                        {liContent.content[0].content[0].value && (
                          <span>{liContent.content[0].content[0].value}</span>
                        )}
                        {liContent.content[0].content[1].value && (
                          <span>{liContent.content[0].content[1].value}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ))}
          </div>
        </article>
        <Contact audiowide={audiowide} />

        <Footer audiowide={audiowide} />
      </section>
    </>
  );
};

export default DetailBlog;
