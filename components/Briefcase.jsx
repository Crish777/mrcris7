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
              Proyectos
            </h2>
          </div>
        </div>

        <div className={`${styles.works}`}>
          {projects &&
            projects.map((el) => (
              <Project
                key={el.sys.id}
                id={el.sys.id}
                data={el.fields}
                audiowide={audiowide}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Briefcase;
