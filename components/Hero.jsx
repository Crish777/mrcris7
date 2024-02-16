import styles from '../styles/Hero.module.css';
import 'atropos/css';
import Atropos from 'atropos';
import { useEffect } from 'react';

const Hero = ({ amaticsc, audiowide, setIsPopUpOpen }) => {
  useEffect(() => {
    Atropos({
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
              <span data-aos="fade-up" data-aos-duration="1250">
                Cristhian Herrera
              </span>{' '}
              <span data-aos="fade-up" data-aos-duration="1500">
                desarrollador frontend
              </span>
            </h1>
            <button
              data-aos="fade-up"
              data-aos-duration="1800"
              onClick={() => setIsPopUpOpen(true)}
              className={`${styles['submit-btn']} ${audiowide.className}`}>
              Contactar
            </button>

            <nav className={`${styles.socialIcons} flex j-s a-c wrap`}>
              <a
                data-aos="fade-up"
                data-aos-duration="1500"
                href="https://www.linkedin.com/in/cristhian-herrera-desarrollador-front-end/"
                target="_blank"
                className={`${styles.socialIcon} linkedinIcon bg-ct`}
                rel="noreferrer"></a>
              <a
                data-aos="fade-up"
                data-aos-duration="1750"
                href="https://github.com/Crish777/"
                target="_blank"
                className={`${styles.socialIcon} githubIcon bg-ct`}
                rel="noreferrer"></a>
              <a
                data-aos="fade-up"
                data-aos-duration="2000"
                href="/images/cv.pdf"
                target="_blank"
                rel="noreferrer"
                className={`${styles.socialIcon} curriculumIcon bg-ct`}></a>
            </nav>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1700"
            className={styles.imgHero}>
            <div className={styles.beforeImg}></div>
            <div className={styles.imgHeroInner}></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
