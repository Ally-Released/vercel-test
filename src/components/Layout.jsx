import React, { useEffect, useRef, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Aurora from './Aurora';

const Layout = ({ children }) => {
  const location = useLocation();
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      syncTouch: true,
    });
    lenisRef.current = lenis;

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
    { name: 'Policies', path: '/policy' },
    { name: 'Buy Synex', path: '/buy' },
  ], []);

  return (
    <>
      <Aurora
        colorStops={["#FFD700", "#FFEA00", "#0D0D0D"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      <header className="sticky-header">
        <div className="container">
          <div className="navbar">
            <Link to="/" className="nav-logo">
              SYNEX
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
        <div className="container">
          <p>&copy; 2024 Synex. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/policy">Privacy Policy</Link>
            <Link to="/policy">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default React.memo(Layout); 