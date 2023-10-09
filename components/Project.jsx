import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Atropos from 'atropos';
import styles from '../styles/Project.module.css';
import 'atropos/css';

const Project = ({ data, id, audiowide }) => {
  const [gif, setGif] = useState(false);
  const [speed, setSpeed] = useState(
    Math.floor(Math.random() * (2 - -1 + 1) + -1)
  );
  
  const atroposEl = useRef(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth > 1024) {
        const myAtropos = Atropos({
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
    <div
      className={`${styles.work} atropos ${gif ? styles.showgif : ''}`}
      ref={atroposEl}
      onMouseEnter={() => setGif(true)}
      onMouseLeave={() => setGif(false)}
      data-scroll
      data-scroll-direction="horizontal"
      data-scroll-speed={speed}>
      <div className="atropos-scale">
        <div className="atropos-rotate">
          <div className="atropos-inner">
            <div className={styles.backgroundSolid}>
              <div className={styles.gifContainer}>
                <Image fill alt="" src={data.gif.data.attributes.url} />
              </div>
              <div className={styles.infoProject}>
                <h3
                  className={`${styles.projectName} ${audiowide.className}`}
                  data-atropos-offset="-10">
                  {data.name}
                </h3>
                <p className={styles.descProject} data-atropos-offset="5">
                  {data.type}
                </p>
                <a
                  href={data.url}
                  target="_blank"
                  rel="noreferrer"
                  className={` ${audiowide.className} ${styles.buttonProject}`}
                  data-atropos-offset="-10">
                  Live site
                </a>
              </div>
              {data.images.data.map((img) => (
                <div
                  key={img.attributes.id}
                  className={`${
                    img.attributes.alternativeText.includes('tablet') ||
                    img.attributes.alternativeText.includes('Tablet')
                      ? styles.tabletImage
                      : img.attributes.alternativeText.includes('phone') ||
                        img.attributes.alternativeText.includes('Phone')
                      ? styles.phoneImage
                      : styles.pcImage
                  } ${styles.containerImage}`}
                  data-atropos-offset="-10">
                  <Image
                    alt=""
                    title=""
                    src={img.attributes.url}
                    fill
                    className={styles.innerPcImage}
                  />
                </div>
              ))}

              {/* <div
                className={`${styles.containerImage} ${styles.pcImage}`}
                data-atropos-offset="-5"
              >
                <Image
                  alt=""
                  title=""
                  src="/images/pc-1-final.png"
                  fill
                  className={styles.innerPcImage}
                />
              </div>
              <div
                className={`${styles.containerImage} ${styles.phoneImage}`}
                data-atropos-offset="30"
              >
                <Image
                  alt=""
                  title=""
                  src="/images/phone-1-final.png"
                  fill
                  className={styles.innerPcImage}
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
