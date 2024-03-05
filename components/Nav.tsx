import Link from 'next/link';
import styles from '../styles/Nav.module.css';
import { SetStateAction, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextFont } from '@next/font/dist/types';
import { Dispatch } from 'react';

interface NavProps {
  audiowide: NextFont;
  animate: boolean;
  setAnimate: Dispatch<SetStateAction<boolean>>;
}

const Nav = ({ audiowide, animate, setAnimate }: NavProps) => {
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <nav
      className={`${styles.navHeader} ${audiowide.className} ${
        animate ? styles.animateNav : ''
      }`}>
      <Link className={`${pathname === '/' ? styles.active : ''}`} href="/">
        Home
      </Link>
      <Link
        className={`${pathname === '/blog' ? styles.active : ''}`}
        href="/blog">
        Blog
      </Link>
    </nav>
  );
};

export default Nav;
