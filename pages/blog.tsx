import BlogCard from '../components/BlogCard';
import styles from '../styles/Blog.module.css';
import Footer from '../components/Footer';
import { Amatic_SC } from '@next/font/google';
import { Audiowide } from '@next/font/google';
import Head from 'next/head';
import Loader from '../components/Loader';
import { useEffect, useState } from 'react';
import { BlogsProps } from 'interfaces/BlogInterfaces';

const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });
const amaticsc = Amatic_SC({ weight: ['400', '700'], subsets: ['latin'] });

export async function getServerSideProps() {
  const query = `query {
    blogCollection{
      items{
        sys{
          id
        }
        titleBlog
        miniatura{
          url
        }
        summary
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
  const blogs = body.data.blogCollection.items;

  return {
    props: {
      blogs,
    },
  };
}

const Blog = ({ blogs }: BlogsProps) => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    if (blogs) {
      setTimeout(() => {
        setLoader(false);
      }, 2000);
    }
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
            <BlogCard key={blog.sys.id} amaticsc={amaticsc} data={blog} />
          ))}
        </div>
        <Footer audiowide={audiowide} />
      </section>
    </>
  );
};

export default Blog;
