import Link from 'next/link';
import styles from '../styles/Nav.module.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Nav = ({ audiowide, animate, setAnimate }) => {
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
