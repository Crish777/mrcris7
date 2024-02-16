import Image from 'next/image';
import styles from '../styles/Banner.module.css';

const Banner = () => {
  return (
    <section className={`${styles.bannerAnimated} sectionPage`}>
      <div className={`container ${styles.containerBanner}`}>
        <div
          data-aos="fade-up"
          data-aos-duration="750"
          className={styles.skill}>
          <Image
            src="/images/html-5.png"
            width={70}
            height={70}
            alt="html logo"
            title="HTML"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className={styles.skill}>
          <Image
            src="/images/css.png"
            width={70}
            height={70}
            alt="css logo"
            title="CSS"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1250"
          className={styles.skill}>
          <Image
            src="/images/js.png"
            width={70}
            height={70}
            alt="Javascript logo"
            title="Javascript"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className={styles.skill}>
          <Image
            src="/images/react.png"
            width={70}
            height={70}
            alt="React logo"
            title="React"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1750"
          className={styles.skill}>
          <Image
            src="/images/next.png"
            width={70}
            height={70}
            alt="Next.js logo"
            title="Next.js"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className={styles.skill}>
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
