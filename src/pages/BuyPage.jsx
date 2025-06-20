import React, { useState, useRef } from 'react';
import Silk from '../components/Silk';
import FadeContent from '../components/FadeContent';
import Crosshair from '../components/Crosshair';

const BuyPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [purchaseButtonText, setPurchaseButtonText] = useState('Purchase Now');
    const modalRef = useRef(null);

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
                    <h1>Get one step ahead</h1>
                    <p>Get lifetime access to Synex with a one-time purchase.</p>
                    <div className="buy-card">
                        <h2>Synex Spoofer</h2>
                        <div className="price-section summary">
                            <p className="price-label">LIFETIME LICENSE</p>
                            <p className="price-display"><span className="new-price">€39.99 EUR</span> <s className="old-price">€59.99 EUR</s></p>
                            <p className="price-note">Unlimited permanent uses</p>
                        </div>
                        <button className="btn btn-primary" onClick={openModal}>View Details</button>
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
                            ref={modalRef}
                            className="details-modal"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Crosshair containerRef={modalRef} color="#FFF200"/>
                            <button className="close-modal-btn" onClick={closeModal}>&times;</button>
                            <div className="modal-content-left">
                                <h2>Synex Woofer</h2>
                                <div className="buy-card-section">
                                    <h3>Windows Compatibility</h3>
                                    <ul className="compatibility-list">
                                        <li>✓ Windows 11/10 23h2/22h2</li>
                                        <li>✓ AMD & Intel Processors</li>
                                        <li>✓ All motherboards including laptops</li>
                                    </ul>
                                </div>
                                <div className="buy-card-section">
                                    <h3>Features</h3>
                                    <ul className="features-grid">
                                        <li>→ Disk</li>
                                        <li>→ SMBIOS</li>
                                        <li>→ Motherboard</li>
                                        <li>→ CPU</li>
                                        <li>→ GPU</li>
                                        <li>→ MAC</li>
                                        <li>→ TPM</li>
                                        <li>→ ... & more</li>
                                    </ul>
                                </div>
                                <div className="buy-card-section">
                                    <h3>Options</h3>
                                    <ul className="options-list">
                                        <li>→ Permanent</li>
                                        <li>→ Temporary (with options)</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="modal-content-right">
                                <div className="bonus-list-container">
                                    <h3>What's Included</h3>
                                    <ul className="bonus-list">
                                        <li>💎 Access to our User Panel</li>
                                        <li>+ Cleaner</li>
                                        <li>+ Excellent customer support</li>
                                        <li>+ Unlimited use of license</li>
                                        <li>+ Detailed instructions</li>
                                        <li>+ Fast delivery</li>
                                    </ul>
                                </div>
                                <div className="purchase-action-area">
                                    <div className="price-section">
                                        <p className="price-label">PRICE LIFETIME USES:</p>
                                        <p className="price-display"><span className="new-price">€39.99 EUR</span> <s className="old-price">€59.99 EUR</s></p>
                                        <p className="price-note">Unlimited permanent uses</p>
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