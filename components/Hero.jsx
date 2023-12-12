import styles from '../styles/Hero.module.css';
import 'atropos/css';
import Atropos from 'atropos';
import { useEffect } from 'react';

const Hero = ({ amaticsc }) => {
  useEffect(() => {
    const myAtropos = Atropos({
      el: '.atropos',
    });
  }, []);
  return (
    <section className={`${styles.heroSection} sectionPage`}>
      <div className={`${styles.containerHero} container`}>
        <div className={styles.infoHero}>
          <h1
            className={`${styles.principalHero} ${amaticsc.className}`}
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="2">
            <span>Cristhian Herrera</span> <span>desarrollador frontend</span>
          </h1>
        </div>

        <div
          className={styles.imgHero}
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="-3">
          <div className={styles.beforeImg}></div>
          <div className={styles.imgHeroInner}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
