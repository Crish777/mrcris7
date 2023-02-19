import Link from 'next/link';
import React, { useRef } from 'react';
import styles from '../styles/Header.module.css';

const Header = ({ audiowide }) => {
  const header = useRef(null);
  const toggleMenu = () => {
    header.current.classList.toggle(styles.active);
  };
  return (
    <header className={styles.header} ref={header}>
      <div className={`${styles.containerHeader} container`}>
        <Link href="/">
          <div className={`${styles.logo} ${audiowide.className}`}>MrCris</div>
        </Link>
        <nav className={`${styles.navHeader} ${audiowide.className}`}>
          {/* <a href="#briefcase" data-scroll-to>Work</a>
          <a href="#about" data-scroll-to>About me</a> */}
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <div className={styles['burgerButton']}>
            <label htmlFor="check" className={styles['menuButton']}>
              <input
                id="check"
                type="checkbox"
                className={styles['inputBurger']}
                onChange={toggleMenu}
              />
              <span className={styles['top']}></span>
              <span className={styles['mid']}></span>
              <span className={styles['bot']}></span>
            </label>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
