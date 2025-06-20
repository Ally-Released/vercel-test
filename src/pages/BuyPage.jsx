import React, { useState } from 'react';
import Silk from '../components/Silk';
import FadeContent from '../components/FadeContent';
import ShinyText from '../components/ShinyText';
import GradientText from '../components/GradientText';
import StarBorder from '../components/StarBorder';
import FuzzyText from '../components/FuzzyText';

const BuyPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [purchaseButtonText, setPurchaseButtonText] = useState('Purchase Now');

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        setPurchaseButtonText('Purchase Now');
    };

    return (
        <>
            <div className="background-container buy-page-background">
                <Silk color="#837F63" />
            </div>
            <section className="buy-section">
                <div className="container">
                    <h1><ShinyText text="Get one step ahead" className="buy-page-shiny" /></h1>
                    <p>
                        <GradientText colors={['#FFF200', '#FFFFFF', '#FFF200']}>
                            Get lifetime access to Synex with a one-time purchase.
                        </GradientText>
                    </p>
                    <div className="buy-card">
                        <h2><ShinyText text="Synex Spoofer" /></h2>
                        <div className="price-section summary">
                            <p className="price-display">
                                <span className="new-price"><ShinyText text="€39.99" /></span>
                                <s className="old-price">€59.99</s>
                            </p>
                            <p className="price-note">Lifetime access. No restrictions.</p>
                        </div>
                        <StarBorder onClick={openModal} className="btn-view-details">
                            View Details
                        </StarBorder>
                    </div>
                </div>
            </section>

            {isModalOpen && (
                <div
                    className="details-modal-overlay"
                    onClick={closeModal}
                >
                    <FadeContent
                        blur={true}
                        duration={500}
                        easing="ease-out"
                        initialOpacity={0}
                        className="details-modal-fade-container"
                    >
                        <div
                            className="details-modal"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="close-modal-btn" onClick={closeModal}>&times;</button>
                            <div className="modal-content-left">
                                <h2><ShinyText text="Synex Spoofer" /></h2>
                                <div className="buy-card-section">
                                    <h3>
                                        <GradientText colors={['#FFF200', '#FFFFFF', '#FFF200']}>
                                            Windows Compatibility
                                        </GradientText>
                                    </h3>
                                    <ul className="compatibility-list">
                                        <li><ShinyText text="✓ Windows 11/10 23h2/22h2" /></li>
                                        <li><ShinyText text="✓ AMD & Intel Processors" /></li>
                                        <li><ShinyText text="✓ All motherboards including laptops" /></li>
                                    </ul>
                                </div>
                                <div className="buy-card-section">
                                    <h3>
                                        <GradientText colors={['#FFF200', '#FFFFFF', '#FFF200']}>
                                            Features
                                        </GradientText>
                                    </h3>
                                    <ul className="features-grid">
                                        <li><ShinyText text="→ Disk Spoof" /></li>
                                        <li><ShinyText text="→ SMBIOS Spoof" /></li>
                                        <li><ShinyText text="→ Motherboard Spoof" /></li>
                                        <li><ShinyText text="→ CPU Spoof" /></li>
                                        <li><ShinyText text="→ GPU Spoof" /></li>
                                        <li><ShinyText text="→ MAC Spoof" /></li>
                                        <li><ShinyText text="→ TPM Spoof" /></li>
                                        <li><ShinyText text="→ ... & more" /></li>
                                    </ul>
                                </div>
                                <div className="buy-card-section">
                                    <h3>
                                        <GradientText colors={['#FFF200', '#FFFFFF', '#FFF200']}>
                                            Options
                                        </GradientText>
                                    </h3>
                                    <ul className="options-list">
                                        <li><ShinyText text="→ Permanent" /></li>
                                        <li><ShinyText text="→ Temporary (with options)" /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="modal-content-right">
                                <div className="bonus-list-container">
                                    <h3><ShinyText text="What's Included" /></h3>
                                    <ul className="bonus-list">
                                        <li><ShinyText text="💎 Full Access to Synex Control Panel" /></li>
                                        <li><ShinyText text="✨ Built-in Spoofing & System Cleaner" /></li>
                                        <li><ShinyText text="💬 Fast & Friendly Customer Support" /></li>
                                        <li><ShinyText text="♾️ Unlimited Lifetime Usage — No Limits" /></li>
                                        <li><ShinyText text="📘 Easy Setup with Step-by-Step Guide" /></li>
                                        <li><ShinyText text="⚡ Instant Delivery After Purchase" /></li>
                                    </ul>
                                </div>
                                <div className="purchase-action-area">
                                    <div className="price-section modal-price">
                                        <p className="modal-price-main">LIFETIME LICENSE — Only €39.99</p>
                                        <p className="modal-price-old">€59.99 (Limited-time offer)</p>
                                        <p className="modal-price-tagline">💡 A single leap to stay one step ahead — forever.</p>
                                    </div>
                                    <a
                                        href="#"
                                        className={`btn btn-primary ${purchaseButtonText === 'TAKE THE SHOT!' ? 'take-the-shot' : ''}`}
                                        onClick={(e) => e.preventDefault()}
                                        onMouseEnter={() => setPurchaseButtonText('TAKE THE SHOT!')}
                                        onMouseLeave={() => setPurchaseButtonText('Purchase Now')}
                                    >
                                        {purchaseButtonText}
                                    </a>
                                    <div className="purchase-tagline">
                                        <FuzzyText
                                            fontSize="1.1rem"
                                            color="#FFFFFF"
                                            baseIntensity={0.05}
                                            hoverIntensity={0.2}
                                        >
                                            UNDETECTED UNMATCHED SYNEX
                                        </FuzzyText>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeContent>
                </div>
            )}
        </>
    );
};

export default BuyPage; 