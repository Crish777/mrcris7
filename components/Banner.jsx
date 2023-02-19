import Image from 'next/image';
import styles from '../styles/Banner.module.css';

const Banner = () => {
  return (
    <section className={`${styles.bannerAnimated} sectionPage`}>
      <div
        className={`container ${styles.containerBanner}`}
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="4">
        <div className={styles.skill}>
          <Image
            src="/images/html-5.png"
            width={70}
            height={70}
            alt="html logo"
            title="HTML"
          />
        </div>
        <div className={styles.skill}>
          <Image
            src="/images/css.png"
            width={70}
            height={70}
            alt="css logo"
            title="CSS"
          />
        </div>
        <div className={styles.skill}>
          <Image
            src="/images/js.png"
            width={70}
            height={70}
            alt="Javascript logo"
            title="Javascript"
          />
        </div>
        <div className={styles.skill}>
          <Image
            src="/images/react.png"
            width={70}
            height={70}
            alt="React logo"
            title="React"
          />
        </div>
        <div className={styles.skill}>
          <Image
            src="/images/next.png"
            width={70}
            height={70}
            alt="Next.js logo"
            title="Next.js"
          />
        </div>
        <div className={styles.skill}>
          <Image
            src="/images/github.png"
            width={70}
            height={70}
            alt="Github logo"
            title="Github"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
