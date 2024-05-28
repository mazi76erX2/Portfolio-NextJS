import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ThemeMode from '../utils/theme.util';
import settings from '../../content/_settings.json';
import content from '../../content/navbar.json';
import css from '../../styles/structure/navbar.module.scss';

interface NavItem {
  url: string;
  title: string;
}

const Navbar: React.FC = () => {
  const router = useRouter();
  const [menuState, setMenuState] = useState(false);

  const toggleMenu = () => {
    setMenuState(!menuState);
  };

  const closeMenuOnRouteChange = useCallback(() => {
    setMenuState(false);
  }, []);

  useEffect(() => {
    router.events.on('routeChangeComplete', closeMenuOnRouteChange);
    return () => {
      router.events.off('routeChangeComplete', closeMenuOnRouteChange);
    };
  }, [router.events, closeMenuOnRouteChange]);

  useEffect(() => {
    let lastY = 0;

    const maybeHideNav = () => {
      const nav = document.querySelector('nav');
      const hiddenAt = window.innerHeight / 2;

      if (nav) {
        const navClassList = nav.classList;
        if (window.scrollY > lastY && window.scrollY > hiddenAt && !navClassList.contains(css.hidden)) {
          navClassList.add(css.hidden);
        } else if (window.scrollY < lastY && navClassList.contains(css.hidden)) {
          navClassList.remove(css.hidden);
        }
      }
      lastY = window.scrollY;
    };

    document.addEventListener('scroll', maybeHideNav, false);

    return () => {
      document.removeEventListener('scroll', maybeHideNav, false);
    };
  }, []);

  return (
    <nav id="Navbar" className={css.container}>
      <ul className={css.menu}>
        <li className={css.menuHeader}>
          <Link className={css.logo} href="/">
            {settings.name}
          </Link>
          <button onClick={toggleMenu} className={css.mobileToggle} data-open={menuState}>
            <div>
              <span></span>
              <span></span>
            </div>
          </button>
        </li>
        <li data-open={menuState} className={css.menuContent}>
          <ul>
            {(content as NavItem[]).map((item, index) => (
              <li key={index}>
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))}
            <li>
              <ThemeMode />
            </li>
          </ul>
        </li>
      </ul>
      <span onClick={toggleMenu} className={css.menuBlackout} data-open={menuState}></span>
    </nav>
  );
};

export default Navbar;

