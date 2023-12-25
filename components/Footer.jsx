import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = ({ audiowide }) => {
  return (
    <footer className={`${styles.footerSection} sectionPage`}>
      <div className={`${styles.containerFooter} container`}>
        <h3 className={styles.copyright}>
          Developed by:{' '}
          <span className={audiowide.className}>Cristhian Herrera</span>
          <Link href="/terms-and-conditions" className={styles.terms}>
            Terms and Conditions
          </Link>
        </h3>

        <h3 className={styles.copyText}>
          <span> &copy;MrCris7 2023</span>
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
