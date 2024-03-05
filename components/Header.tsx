import Image from 'next/image';
import Link from 'next/link';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import styles from '../styles/Header.module.css';
import Nav from './Nav';
import { usePathname } from 'next/navigation';
import { NextFont } from '@next/font/dist/types';

interface HeaderProps {
  audiowide: NextFont;
}

const Header = ({ audiowide }: HeaderProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [disablePointer, setDisablePointer] = useState(false);
  const header = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpenMenu(false);
    setAnimate(false);
    if (header.current) {
      header.current.classList.remove(styles.activeHeader);
    }

    const body = document.body;
    if (body) {
      body.style.overflow = 'unset';
    }
  }, [pathname]);

  const toggleMenu = (e: ChangeEvent<HTMLInputElement>) => {
    if (header.current) {
      header.current.classList.toggle(styles.activeHeader);
    }
    setDisablePointer(true);

    if (e.target) {
      e.target.style.pointerEvents = 'none';
    }
    if (openMenu) {
      setAnimate(false);
      setTimeout(() => {
        setOpenMenu(false);
        e.target.style.pointerEvents = 'unset';
        setDisablePointer(false);
      }, 1100);
      document.body.style.overflow = 'unset';
      return;
    }
    setOpenMenu(true);
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      setAnimate(true);
      e.target.style.pointerEvents = 'unset';
      setDisablePointer(false);
    }, 0);
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
