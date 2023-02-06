import Link from "next/link";
import React from "react";
import styles from "../styles/Header.module.css";

const Header = ({audiowide}) => {
  return (
    <header className={styles.header}>
      <div className={`${styles.containerHeader} container`}>
        <Link href="/">
          <div className={`${styles.logo} ${audiowide.className}`}>
            MrCris
          </div>
        </Link>
        <nav className={`${styles.navHeader} ${audiowide.className}`}>
          {/* <a href="#briefcase" data-scroll-to>Work</a>
          <a href="#about" data-scroll-to>About me</a> */}
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
