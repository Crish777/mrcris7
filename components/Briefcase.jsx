import styles from '../styles/Briefcase.module.css';
import Project from './Project';

const Briefcase = ({ audiowide, projects }) => {
  return (
    <section className={styles.briefcase} id="briefcase">
      <div className={`container ${styles.briefcaseContainer}`}>
        <div className={`${styles.infoWork}`}>
          <div className={`${styles.innerInfoWork}`}>
            <h2
              className={`${styles.infoWorkTitle} ${audiowide.className}`}
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed={-1}>
              Mis trabajos
            </h2>
          </div>
        </div>

        <div className={`${styles.works}`}>
          {projects.map((el, index) => (
            <Project key={el.id} data={el.attributes} audiowide={audiowide} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Briefcase;
