import styles from '../styles/Footer.module.css';

const Footer = ({audiowide}) => {
  return (
    <footer className={`${styles.footerSection} sectionPage`}>

      <div className={`${styles.containerFooter} container`}>
        <h3 className={styles.copyright}>
          Developed by: <span className={audiowide.className}>Cristhian Herrera</span>
          <span className={styles.terms}>Terms and Conditions</span>
        </h3>
      </div>

    </footer>
  )
}

export default Footer