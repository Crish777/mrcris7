import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../styles/BlogCard.module.css';
import Atropos from 'atropos';
import 'atropos/css';
import Link from 'next/link';

const BlogCard = ({ amaticsc, data }) => {
  const atroposEl = useRef(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth > 1024) {
        Atropos({
          el: atroposEl.current,
          shadow: false,
          shadowScale: 0,
          shadowOffset: 0,
          highlight: false,
        });
      }
    }
  }, []);
  return (
    <Link href={`/blog/${data.sys.id}`}>
      <div className={styles.blogCard} ref={atroposEl}>
        <div className="atropos-scale">
          <div className="atropos-rotate">
            <div className="atropos-inner">
              <div className={styles.imgBlog} data-atropos-offset="1">
                <Image
                  fill
                  src={`${data.miniatura.url}`}
                  alt=""
                  priority
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                />
              </div>
              <div className={styles.infoBlog}>
                <h2
                  className={`${amaticsc.className} ${styles.blogName}`}
                  data-atropos-offset="-1">
                  {data.titleBlog}
                </h2>
                <p className={styles.resume} data-atropos-offset="-3">
                  {data.summary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
