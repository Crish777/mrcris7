import Image from 'next/image';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Atropos from 'atropos';
import styles from '../styles/Project.module.css';
import 'atropos/css';

const Project = ({ data, audiowide, id }) => {
  const [gif, setGif] = useState(false);
  const [speed, setSpeed] = useState(
    Math.floor(Math.random() * (2 - -1 + 1) + -1)
  );

  const videoProject = useCallback(
    (node) => {
      if (node !== null) {
        if (gif) {
          node.play();
        } else {
          node.pause();
        }
      }
    },
    [gif]
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
      key={id}
      className={`${styles.work} atropos ${gif ? styles.showgif : ''}`}
      ref={atroposEl}
      onMouseEnter={() => {
        setGif(true);
      }}
      onMouseLeave={() => {
        setGif(false);
      }}
      data-scroll
      data-scroll-direction="horizontal"
      data-scroll-speed={speed}>
      <div className="atropos-scale">
        <div className="atropos-rotate">
          <div className="atropos-inner">
            <div className={styles.backgroundSolid}>
              <div className={styles.gifContainer} data-scroll-repeat>
                {data.projectMedia.filter(
                  (media) => media.fields.title === 'video'
                )[0] ? (
                  <video
                    muted
                    loop
                    className={styles['project-video']}
                    ref={videoProject}>
                    <source
                      src={`https:${
                        data.projectMedia.filter(
                          (media) => media.fields.title === 'video'
                        )[0].fields.file.url
                      }`}
                    />
                  </video>
                ) : (
                  <Image
                    fill
                    alt=""
                    src={`https:${data.projectMedia[0].fields.file.url}`}
                  />
                )}
              </div>
              <div className={styles.infoProject}>
                <h3
                  className={`${styles.projectName} ${audiowide.className}`}
                  data-atropos-offset="-10">
                  {data.name}
                </h3>
                <p className={styles.descProject} data-atropos-offset="5">
                  {data.description.content[0].content[0].value}
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
              {data.projectMedia &&
                data.projectMedia.map((img, indexImg) => (
                  <>
                    {indexImg === 0 ? (
                      ''
                    ) : (
                      <div
                        key={img.sys.id}
                        className={`${
                          img.fields.title.includes('tablet') ||
                          img.fields.title.includes('Tablet')
                            ? styles.tabletImage
                            : img.fields.title.includes('phone') ||
                              img.fields.title.includes('Phone')
                            ? styles.phoneImage
                            : styles.pcImage
                        } ${styles.containerImage}`}
                        data-atropos-offset="-10">
                        <Image
                          alt=""
                          title=""
                          src={`https:${img.fields.file.url}`}
                          fill
                          className={styles.innerPcImage}
                        />
                      </div>
                    )}
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
