import React from 'react';
import styles from '../styles/NotFound.module.css';
import Link from 'next/link';
import { Audiowide } from '@next/font/google';
import Image from 'next/image';

const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });
const Index = () => {
  return (
    <div data-scroll-section>
      <div className={`container ${styles['container-404']}`}>
        <div className={styles['left-info-not-found']}>
          <h3 className={`${styles['title-not-found']} ${audiowide.className}`}>
            <span>
              Ohh <span>Yeicob!</span>
            </span>
            <span> Estás perdido ?</span>
          </h3>
          <Link className={styles['return-to-house']} href="/">
            Volvamos a casa
          </Link>
        </div>

        <div className={styles['right-side-not-found']}>
          <Image
            className={styles['yeicob-image']}
            alt=""
            fill
            src="/images/yeik.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
