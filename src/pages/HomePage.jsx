import React from 'react';
import { Link } from 'react-router-dom';
import BlurText from '../components/BlurText';
import FuzzyText from '../components/FuzzyText';
import FuzzyGradientText from '../components/FuzzyGradientText';
import StarBorder from '../components/StarBorder';
import Aurora from '../components/Aurora';

const FeatureCard = ({ icon, title, description }) => (
    <div className="feature-card">
        <div className="feature-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

const HomePage = () => {
    const handleAnimationComplete = () => {
      console.log('Animation completed!');
    };

    return (
        <>
            <section className="hero">
                <Aurora
                  colorStops={["#FFD700", "#FFEA00", "#0D0D0D"]}
                  blend={0.5}
                  amplitude={2.0}
                  speed={0.5}
                />
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
                    <Link to="/login" style={{textDecoration: 'none'}}>
                        <StarBorder as="div" color="var(--color-primary)">
                            Customer Portal
                        </StarBorder>
                    </Link>
                </div>
            </section>

            <section className="widget-section">
                <div className="container">
                    <div className="content-widget">
                        <h2>Why Synex stands out</h2>
                        <p className="section-description">
                            We provide a combination of speed, reliability, and lifetime support.
                        </p>
                        <div className="feature-grid">
                            <FeatureCard
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                                }
                                title="Performance"
                                description="Unrivaled processing speeds and efficiency."
                            />
                            <FeatureCard
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                                }
                                title="Security"
                                description="Keep your operations secure and undetected."
                            />
                            <FeatureCard
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2"></path><path d="M12 18v-2a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2"></path><path d="M20 12v-2a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                                }
                                title="Reliability"
                                description="99.9% uptime guarantee for all our services."
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage; 