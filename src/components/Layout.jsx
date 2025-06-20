import React, { useEffect, useRef, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Aurora from './Aurora';
import logo from '../assets/LogoFX.png';
import GradientText from './GradientText';
import Noise from './Noise';

const Layout = ({ children }) => {
  const location = useLocation();
  const lenisRef = useRef(null);
  const [scrollbarTop, setScrollbarTop] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      syncTouch: true,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ({ scroll, limit }) => {
      if (limit > 0) {
        const progress = scroll / limit;
        const thumbHeight = 40; // Height of the logo scrollbar thumb
        const scrollableTrackHeight = window.innerHeight - thumbHeight - 20; // -20 for top/bottom padding
        setScrollbarTop(progress * scrollableTrackHeight);
      } else {
        setScrollbarTop(0);
      }
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const navLinks = useMemo(() => [
    { name: 'Home', path: '/' },
    { name: 'Customer Area', path: '/login' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Buy Synex', path: '/buy' },
  ], []);

  const isBuyPage = location.pathname === '/buy';
  const isHomePage = location.pathname === '/';
  const isFaqPage = location.pathname === '/faq';
  const isLoginPage = location.pathname === '/login';

  const showNoise = isFaqPage || isLoginPage;
  const showAurora = !isBuyPage && !isHomePage && !showNoise;

  return (
    <>
      {showNoise && (
        <div className="background-container">
          <Noise />
        </div>
      )}
      {showAurora && (
        <Aurora
          colorStops={["#FFD700", "#FFEA00", "#0D0D0D"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      )}
      <header className="sticky-header">
        <div className="container">
          <div className="navbar">
            <Link to="/" className="nav-logo">
              <img src={logo} alt="Synex Logo" className="logo-img" />
              <GradientText
                className="logo-text"
                colors={['#FFF200', '#FFFFFF', '#FFF200']}
              >
                Synex
              </GradientText>
            </Link>
            <nav>
              <ul className="nav-links">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={location.pathname === link.path ? 'active' : ''}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <p>&copy; 2025 synex</p>
        <Link to="/policy" className="footer-link">Terms & Conditions</Link>
      </footer>
      
      <div className="custom-scrollbar-container">
        <div className="custom-scrollbar-thumb" style={{ top: `${scrollbarTop}px` }}>
          <img src={logo} alt="Scroll Indicator" className="scrollbar-logo" />
        </div>
      </div>
    </>
  );
};

export default React.memo(Layout);