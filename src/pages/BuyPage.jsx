import React from 'react';

const BuyPage = () => {
  return (
    <section className="buy-section">
      <div className="container">
        <h2>Choose Your Plan</h2>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Basic</h3>
            <p className="price">$9.99/mo</p>
            <ul>
              <li>Feature A</li>
              <li>Feature B</li>
              <li>Feature C</li>
            </ul>
            <button className="btn btn-primary">Select Plan</button>
          </div>
          <div className="pricing-card popular">
            <h3>Pro</h3>
            <p className="price">$19.99/mo</p>
            <ul>
              <li>All Basic Features</li>
              <li>Feature D</li>
              <li>Feature E</li>
            </ul>
            <button className="btn btn-primary">Select Plan</button>
          </div>
          <div className="pricing-card">
            <h3>Enterprise</h3>
            <p className="price">Contact Us</p>
            <ul>
              <li>All Pro Features</li>
              <li>Dedicated Support</li>
              <li>Custom Integrations</li>
            </ul>
            <button className="btn btn-primary">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyPage; 