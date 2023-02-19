import styles from '../../styles/BlogDetail.module.css';
import Footer from '../../components/Footer';
import Markdown from 'marked-react';
import Ukiyo from 'ukiyojs';
import { Audiowide } from '@next/font/google';
import { useEffect, useRef } from 'react';

const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });

const DetailBlog = ({ blog }) => {
  const heroBlog = useRef(null);
  useEffect(() => {
    const images = document.querySelectorAll('img');
    new Ukiyo(images, {
      scale: 1.5,
      speed: 2,
      willChange: true,
      wrapperClass: 'ukiyo-wrapper',
      externalRAF: false,
    });
  }, []);


  return (
    <section
      className={`${styles.sectionBlogDetail} sectionPage`}
      data-scroll-section>
      <article className={`${styles.containerBlogDetail}`}>
        <div
          className={styles.heroDetailBlog}
          style={{ backgroundImage: `url(${blog.attributes.image.data.attributes.formats.large.url})` }}
          ref={heroBlog}
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed={-1.5}>
          <h1
            className={`${audiowide.className} ${styles.titleBlog}`}
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed={2}>
            {blog.attributes.title}
          </h1>
        </div>

        <div className={`container ${styles.contentBlog}`}>
          <Markdown>{blog.attributes.content}</Markdown>
        </div>
      </article>

      <Footer audiowide={audiowide} />
    </section>
  );
};

export async function getServerSideProps(req) {
  const url = `${process.env.STRAPI_URL}/blogs/${req.params.id}?populate=image`;
  const response = await fetch(url);
  const blog = await response.json();

  return {
    props: {
      blog: blog.data,
    },
  };
}

export default DetailBlog;