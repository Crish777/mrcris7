import React, { useEffect, useRef } from "react";
import styles from "../styles/About.module.css";

import Ukiyo from "ukiyojs";

const About = ({ audiowide }) => {
  const ukiyo = useRef(null);
  useEffect(() => {
    let instance;

    const destroyUkiyo = () => {
      instance.destroy();
    };
    const createyUkiyo = () => {
      instance = new Ukiyo(ukiyo.current, {
        scale: 1.5, // 1~2 is recommended
        speed: 1.5, // 1~2 is recommended
        willChange: true,
        externalRAF: false,
      });
    };
    createyUkiyo();
  }, []);
  return (
    <section className={`${styles.aboutSection} sectionPage`} id="about">
      <div className={`container ${styles.aboutContainer}`}>
        <h2
          className={`${styles.aboutTitle} ${audiowide.className}`}
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed={-1}
        >
          Sobre Mi
        </h2>
        <div
          className={styles.aboutImg}
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed={3}
        >
          {/* <Image alt="" title="" src="/images/developer.jpg" sizes=" 50%" fill /> */}
          <div className={styles.innerImg} ref={ukiyo}></div>
        </div>
        <div className={styles.aboutText}>
          <p
            className={styles.infoAbout}
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-1"
          >
            Comencé mi camino en el mundo digital aprendiendo sobre marketing,
            pero fue durante mis estudios de marketing cuando descubrí mi
            verdadera pasión: la creación de sitios web. Decidí profundizar en
            este campo y después de solo 3 meses de estudio intenso, conseguí un
            trabajo como desarrollador frontend. Este trabajo me permitió
            progresar de manera acelerada en mi carrera y desarrollar mis
            habilidades y conocimientos. Ahora, con más de dos años de
            experiencia, me he especializado en el uso de tecnologías como HTML,
            CSS, JavaScript, jQuery, ReactJS, NextJS, GitHub y un poco de
            Node.js. Me apasiona lo que hago y me siento muy orgulloso de haber
            creado sitios web únicos y con una complicación considerable. Estoy
            emocionado por seguir creciendo y explorando nuevas tecnologías en
            el campo del desarrollo web.
          </p>
          <p
            className={styles.infoAbout}
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="1"
          >
            Además de mi pasión por el desarrollo web, también ofrezco mis servicios a aquellos que buscan crear o mejorar su presencia en línea. Me encanta ayudar a las empresas a alcanzar sus objetivos a través de la creación de sitios web atractivos y funcionales. Si estás buscando un desarrollador web confiable y apasionado, no dudes en contactarte conmigo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
