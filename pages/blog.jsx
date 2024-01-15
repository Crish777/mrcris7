import BlogCard from '../components/BlogCard';
import styles from '../styles/Blog.module.css';
import Footer from '../components/Footer';
import { Amatic_SC } from '@next/font/google';
import { Audiowide } from '@next/font/google';
import Head from 'next/head';
import Loader from '../components/Loader';
import { useEffect, useState } from 'react';
import { createClient } from 'contentful';

const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });
const amaticsc = Amatic_SC({ weight: ['400', '700'], subsets: ['latin'] });

export async function getStaticProps() {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCES_TOKEN,
  });

  const res = await client.getEntries({ content_type: 'blog' });

  return {
    props: {
      blogs: res.items,
    },
  };
}

const Blog = ({ blogs }) => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    if (blogs) {
      setTimeout(() => {
        setLoader(false);
      }, 2000);
    }
    console.log(blogs);
  }, [blogs]);
  return (
    <>
      <Head>
        <title>Blog | MrCris</title>
        <meta name="description" content="Desarrollador frontend creativo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon-red.webp" />
      </Head>
      <Loader active={loader ? 'show' : 'hide'} thanks={false} />
      <section
        className={`${styles.sectionBlog} sectionPage`}
        data-scroll-section>
        <div className={`container ${styles.containerBlog}`}>
          {blogs.map((blog) => (
            <BlogCard key={blog.id} amaticsc={amaticsc} data={blog} />
          ))}
        </div>
        <Footer audiowide={audiowide} />
      </section>
    </>
  );
};

export default Blog;
