import React from 'react';
import styles from '../styles/Loader.module.css';

const Loader = ({ active, thanks }) => {
  return (
    <section
      className={` ${styles[active]} ${styles.loaderWrapper} ${
        thanks ? styles.activeThanks : ''
      }`}>
      <div className={`${styles.thanksContainer}`}>
        <p className={styles.thanksText}>Gracias por contactar</p>
        <p className={styles.thanksText}>
          Atenderé tu solicitud de inmediato &#128526;
        </p>
      </div>

      <div className={`${styles.loader} ${styles.loader1}`}>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loader;
