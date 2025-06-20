import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BlurText from '../components/BlurText';
import FuzzyText from '../components/FuzzyText';
import FuzzyGradientText from '../components/FuzzyGradientText';
import StarBorder from '../components/StarBorder';
import GradientText from '../components/GradientText';
import ShinyText from '../components/ShinyText';
import Noise from '../components/Noise';
import GlareHover from '../components/GlareHover';

const HomePage = () => {
    const handleAnimationComplete = () => {
      console.log('Animation completed!');
    };

    const featureGridRef = useRef(null);
    const featureCardsRef = useRef([]);

    useEffect(() => {
        const grid = featureGridRef.current;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        if (grid) {
            observer.observe(grid);
        }

        const handleScroll = () => {
            if (!grid) return;

            const rect = grid.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            
            // Start when the top of the grid is visible, end when bottom is visible
            const scrollPercent = (viewportHeight - rect.top) / (viewportHeight + rect.height);
            const progress = Math.max(0, Math.min(1, scrollPercent));

            const cards = featureCardsRef.current;
            if (!cards.length) return;

            requestAnimationFrame(() => {
                if (window.innerWidth < 768) {
                    // On smaller screens, reset any transform
                    cards.forEach(card => {
                        if (card) card.style.transform = '';
                    });
                    return;
                }

                // Use a sinusoidal wave for the animation progress to return to the start
                const animProgress = Math.sin(progress * Math.PI);

                // Card 1 (left) moves towards card 3's position and back
                const x1 = animProgress * 210; // 200% for cards, 10% for gap
                // Card 3 (right) moves towards card 1's position and back
                const x3 = animProgress * -210;
                // Card 2 (middle) scales down and back up - reduced for smoothness
                const scale2 = 1 - animProgress * 0.05;
                
                if (cards[0]) cards[0].style.transform = `translateX(${x1}%)`;
                if (cards[1]) cards[1].style.transform = `scale(${scale2})`;
                if (cards[2]) cards[2].style.transform = `translateX(${x3}%)`;
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            if (grid) {
                observer.unobserve(grid);
            }
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Noise
                patternSize={210}
                patternScaleX={1}
                patternScaleY={2}
                patternRefreshInterval={2}
                patternAlpha={10}
            />
            <section className="hero">
                <div className="container">
                    <div className="tagline">
                       <BlurText
                          text="Undetected, Unmatched."
                          delay={150}
                          animateBy="words"
                          direction="top"
                        />
                       <BlurText
                          text="Synex."
                          delay={150}
                          animateBy="words"
                          direction="top"
                          initialDelay={0.3}
                          onAnimationComplete={handleAnimationComplete}
                          className="text-primary"
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 'var(--space-xl)'}}>
                        <FuzzyText
                            fontSize={'40px'}
                            fontWeight={700}
                            color={'#FFFFFF'}
                            baseIntensity={0.2}
                        >
                            Fair play is&nbsp;
                        </FuzzyText>
                        <FuzzyGradientText
                            fontSize={'40px'}
                            fontWeight={700}
                            baseIntensity={0.2}
                        >
                            Overrated.
                        </FuzzyGradientText>
                    </div>
                    <Link to="/buy" style={{textDecoration: 'none'}}>
                        <StarBorder as="div" color="var(--color-primary)">
                            Get Started
                        </StarBorder>
                    </Link>
                </div>
            </section>

            <section className="widget-section">
                <div className="container">
                    <div className="content-widget">
                        <GradientText
                            colors={['var(--color-primary)', '#ffffff', 'var(--color-primary)']}
                            className="h2-gradient"
                        >
                            Why Synex stands out
                        </GradientText>
                        <ShinyText 
                            text="We provide a combination of speed, reliability, and lifetime support."
                            className="section-description" 
                        />
                        <div className="feature-grid" ref={featureGridRef}>
                            <GlareHover
                                glareColor="var(--color-primary)"
                                glareOpacity={0.001}
                                transitionDuration={1200}
                                background="transparent"
                                borderColor="transparent"
                                width="100%"
                                height="100%"
                                className="fade-in-on-scroll"
                                ref={el => featureCardsRef.current[0] = el}
                            >
                                <div className="feature-card">
                                    <div className="feature-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                                    </div>
                                    <h3>Security You Don't Have to Worry About</h3>
                                    <p>Designed with absolute discretion, Synex keeps your system airtight no noise, no leaks.</p>
                                </div>
                            </GlareHover>
                            <GlareHover
                                glareColor="var(--color-primary)"
                                glareOpacity={0.08}
                                transitionDuration={1200}
                                background="transparent"
                                borderColor="transparent"
                                width="100%"
                                height="100%"
                                className="fade-in-on-scroll"
                                ref={el => featureCardsRef.current[1] = el}
                            >
                                <div className="feature-card">
                                    <div className="feature-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4"></path><path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"></path></svg>
                                    </div>
                                    <h3>Permanent Solution</h3>
                                    <p>Own It Once. Win Forever.</p>
                                </div>
                            </GlareHover>
                            <GlareHover
                                glareColor="var(--color-primary)"
                                glareOpacity={0.08}
                                transitionDuration={1200}
                                background="transparent"
                                borderColor="transparent"
                                width="100%"
                                height="100%"
                                className="fade-in-on-scroll"
                                ref={el => featureCardsRef.current[2] = el}
                            >
                                <div className="feature-card">
                                    <div className="feature-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                                    </div>
                                    <h3>Elite-Level Performance Backed by Real Results</h3>
                                    <p>Chosen by top users who demand consistancy under pressure not just claims, but reliability where it matters.</p>
                                </div>
                            </GlareHover>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage; 