import styles from '../styles/Hero.module.css';
import 'atropos/css';
import Atropos from 'atropos';
import { useEffect } from 'react';

const Hero = ({ amaticsc, audiowide, setIsPopUpOpen }) => {
  useEffect(() => {
    const myAtropos = Atropos({
      el: '.atropos',
    });
  }, []);
  return (
    <>
      <section className={`${styles.heroSection} sectionPage`}>
        <div className={`${styles.containerHero} container`}>
          <div
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-2"
            className={styles.infoHero}>
            <h1 className={`${styles.principalHero} ${amaticsc.className}`}>
              <span>Cristhian Herrera</span> <span>desarrollador frontend</span>
            </h1>
            <button
              onClick={() => setIsPopUpOpen(true)}
              className={`${styles['submit-btn']} ${audiowide.className}`}>
              Contactar
            </button>

            <nav className={`${styles.socialIcons} flex j-s a-c wrap`}>
              <a
                href="https://www.linkedin.com/in/cristhian-herrera-desarrollador-front-end/"
                target="_blank"
                className={`${styles.socialIcon} linkedinIcon bg-ct`}></a>
              <a
                href="https://github.com/Crish777/"
                target="_blank"
                className={`${styles.socialIcon} githubIcon bg-ct`}></a>
              <a
                href="/images/cv.pdf"
                target="_blank"
                className={`${styles.socialIcon} curriculumIcon bg-ct`}></a>
            </nav>
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
    </>
  );
};

export default Hero;
