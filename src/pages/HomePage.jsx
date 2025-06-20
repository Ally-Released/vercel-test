import React from 'react';
import { Link } from 'react-router-dom';
import BlurText from '../components/BlurText';
import FuzzyText from '../components/FuzzyText';
import FuzzyGradientText from '../components/FuzzyGradientText';
import StarBorder from '../components/StarBorder';
import GradientText from '../components/GradientText';
import ShinyText from '../components/ShinyText';

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
                        <div className="feature-grid">
                            <FeatureCard
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                                }
                                title="Security You Don't Have to Worry About"
                                description="Designed with absolute discretion, Synex keeps your system airtight no noise, no leaks."
                            />
                            <FeatureCard
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                                }
                                title="Elite-Level Performance Backed by Real Results"
                                description="Chosen by top users who demand consistancy under pressure not just claims, but reliability where it matters."
                            />
                            <FeatureCard
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4"></path><path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"></path></svg>
                                }
                                title="Permanent Solution"
                                description="Own It Once. Win Forever."
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage; 