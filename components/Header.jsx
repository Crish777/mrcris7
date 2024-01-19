import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/Header.module.css';
import Nav from './Nav';
import { usePathname } from 'next/navigation';

const Header = ({ audiowide }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [disablePointer, setDisablePointer] = useState(false);
  const header = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpenMenu(false);
    setAnimate(false);
    header.current.classList.remove(styles.activeHeader);
  }, [pathname]);

  const toggleMenu = (e) => {
    header.current.classList.toggle(styles.activeHeader);
    setDisablePointer(true);
    e.target.style.pointerEvents = 'none';
    if (openMenu) {
      setAnimate(false);
      setTimeout(() => {
        setOpenMenu(false);
        e.target.style.pointerEvents = null;
        setDisablePointer(false);
      }, 1100);
      return;
    }
    setOpenMenu(true);
    setTimeout(() => {
      setAnimate(true);
      e.target.style.pointerEvents = null;
      setDisablePointer(false);
    }, 50);
    if (openMenu) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.style.overflow = null;
  };

  return (
    <>
      <header className={styles.header} ref={header}>
        <div className={`${styles.containerHeader} container`}>
          <Link href="/">
            <div className={`${styles.logo} ${audiowide.className}`}>
              <Image
                fill
                alt="Site logo"
                src="/images/logo-light.webp"
                sizes="(max-width: 768px) 100%,
              (max-width: 1200px) 100%,
              100%"
              />
            </div>
          </Link>
          <div className={styles.burgerButton}>
            <label
              htmlFor="check"
              className={styles.menuButton}
              style={{ pointerEvents: disablePointer ? 'none' : 'all' }}>
              <input
                id="check"
                type="checkbox"
                className={styles.inputBurger}
                onChange={toggleMenu}
              />
              <span className={styles.top}></span>
              <span className={styles.mid}></span>
              <span className={styles.bot}></span>
            </label>
          </div>
        </div>
      </header>
      {openMenu && (
        <Nav audiowide={audiowide} animate={animate} setAnimate={setAnimate} />
      )}
    </>
  );
};

export default Header;
