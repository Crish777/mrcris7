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
        Atropos({
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
                {data.projectMediaCollection.items.filter(
                  (media) => media.title === 'video'
                )[0] && (
                  <video
                    muted
                    loop
                    className={styles['project-video']}
                    ref={videoProject}>
                    <source
                      src={`${
                        data.projectMediaCollection.items.filter(
                          (media) => media.title === 'video'
                        )[0].url
                      }`}
                    />
                  </video>
                )}
                {data.projectMediaCollection.items.filter(
                  (media) => media.title === 'mainImg'
                )[0] && (
                  <Image
                    fill
                    alt=""
                    src={`${data.projectMediaCollection[0].fields.file.url}`}
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
                  {data.description.json.content[0].content[0].value}
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
              {data.projectMediaCollection.items &&
                data.projectMediaCollection.items.map((img, indexImg) => (
                  <>
                    {indexImg === 0 ? (
                      ''
                    ) : (
                      <div
                        key={img.sys.id}
                        className={`${
                          img.title.includes('tablet') ||
                          img.title.includes('Tablet')
                            ? styles.tabletImage
                            : img.title.includes('phone') ||
                              img.title.includes('Phone')
                            ? styles.phoneImage
                            : styles.pcImage
                        } ${styles.containerImage}`}
                        data-atropos-offset="-10">
                        <Image
                          alt=""
                          title=""
                          src={`${img.url}`}
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
