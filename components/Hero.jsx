import styles from '../styles/Hero.module.css';
import 'atropos/css';
import Atropos from 'atropos';
import { useEffect } from 'react';
import Image from 'next/image';

const Hero = ({amaticsc, setLoader}) => {
  useEffect(() => {
    const myAtropos = Atropos({
      el: '.atropos',
      // rest of parameters
    });
  }, [])
  return (
    <section className={`${styles.heroSection} sectionPage`} >
      <div className={`${styles.containerHero} container`}>
        <div className={styles.infoHero}>
            <h1 className={`${styles.principalHero} ${amaticsc.className}`} data-scroll data-scroll-direction="vertical" data-scroll-speed="2">Hola, soy un <span>desarrollador frontend</span> creativo</h1>
        </div>
        {/* <div className={`${styles.atroposContainer} atropos`}>
          <div className="atropos-scale">
            <div className="atropos-rotate">
              <div className="atropos-inner"> */}

                <div className={styles.imgHero} data-scroll data-scroll-direction="vertical" data-scroll-speed="-3">

                  <div className={styles.beforeImg}></div>
                  <div className={styles.imgHeroInner}>
                    {/* <Image fill src="/images/me.png" alt="" title="Frontend developer" priority onLoadingComplete={() => setLoader(false)}/> */}
                  </div>

                </div>

              {/* </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
