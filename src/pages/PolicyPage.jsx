import React from 'react';
import './PolicyPage.css';
import ShinyText from '../components/ShinyText';

const PolicyPage = () => {
    return (
        <div className="policy-container">
            <h1 className="policy-title">Store Policy</h1>
            <div className="policy-content">
                <div className="policy-section">
                    <h2 className="policy-section-title">
                        <ShinyText text="1. Refund Policy" />
                    </h2>
                    <ul className="policy-list">
                        <li>Refunds are only eligible if the product does not function as described after full support attempts.</li>
                        <li>Refund requests must be submitted within 24 hours of purchase with proof of issue and support chat logs.</li>
                        <li>No refunds for buyer error, change of mind, or misuse.</li>
                    </ul>
                </div>

                <div className="policy-section">
                    <h2 className="policy-section-title">
                        <ShinyText text="2. Delivery Terms" />
                    </h2>
                    <ul className="policy-list">
                        <li>All digital products are delivered within 1–24 hours after confirmed payment.</li>
                    </ul>
                </div>

                <div className="policy-section">
                    <h2 className="policy-section-title">
                        <ShinyText text="3. Usage & Warranty" />
                    </h2>
                    <ul className="policy-list">
                        <li>Products are sold as-is for personal use only. Use at your own risk.</li>
                    </ul>
                </div>

                <div className="policy-section">
                    <h2 className="policy-section-title">
                        <ShinyText text="4. Support Policy" />
                    </h2>
                    <ul className="policy-list">
                        <li>Basic setup support is provided.</li>
                        <li>Custom setups, private fixes, or extra features require additional payment (if offered).</li>
                    </ul>
                </div>

                <div className="policy-section">
                    <h2 className="policy-section-title">
                        <ShinyText text="5. Blacklist & Chargebacks" />
                    </h2>
                    <ul className="policy-list">
                        <li>Chargeback attempts, scam reports, or ToS violations result in instant blacklist without warning.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PolicyPage; 