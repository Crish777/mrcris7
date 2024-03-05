import { ProjectsMrCris7 } from 'interfaces/HomeInterfaces';
import styles from '../styles/Briefcase.module.css';
import Project from './Project';
import { NextFont } from '@next/font/dist/types';

interface BriefcaseProps {
  audiowide: NextFont;
  projects: ProjectsMrCris7[];
}

const Briefcase = ({ audiowide, projects }: BriefcaseProps) => {
  return (
    <section className={styles.briefcase} id="briefcase">
      <div className={`container ${styles.briefcaseContainer}`}>
        <div className={`${styles.infoWork}`}>
          <div className={`${styles.innerInfoWork}`}>
            <h2
              data-aos="fade-up"
              data-aos-duration="1500"
              className={`${styles.infoWorkTitle} ${audiowide.className}`}>
              Proyectos
            </h2>
          </div>
        </div>

        <div
          className={`${styles.works}`}
          data-aos="fade-up"
          data-aos-duration="1500">
          {projects &&
            projects.map((project) => (
              <Project
                key={project.sys.id}
                data={project}
                audiowide={audiowide}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Briefcase;
