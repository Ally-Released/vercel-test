import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Beams from '../components/Beams';
import NoiseArt from '../components/NoiseArt';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('productKey');

  return (
    <div className="login-page-container">
        <div className="login-background-beams">
            <Beams
                beamWidth={4}
                beamHeight={15}
                beamNumber={12}
                lightColor="#FFD700"
                speed={2}
                noiseIntensity={1.25}
                scale={0.2}
                rotation={0}
            />
        </div>
        <div className="customer-portal-container premium-layout">
            <div className="portal-image-header">
                <NoiseArt colors={['#0D0D0D', 'var(--color-primary)']} />
            </div>
            <div className="portal-header">
                <h2 className="portal-title">Customer Portal</h2>
                <p className="portal-subtitle">Access your Synex dashboard.</p>
            </div>
    
            <div className="login-tabs">
              <button
                className={`tab ${activeTab === 'productKey' ? 'active' : ''}`}
                onClick={() => setActiveTab('productKey')}
              >
                Product Key
              </button>
              <button
                className={`tab ${activeTab === 'orderId' ? 'active' : ''}`}
                onClick={() => setActiveTab('orderId')}
              >
                Order ID
              </button>
            </div>
    
            <div className="login-form">
              <div className="form-group">
                <input
                  id="loginCredential"
                  type="text"
                  className="form-input"
                  placeholder={activeTab === 'productKey' ? 'Enter your product key' : 'Enter your Order ID'}
                />
              </div>
              <button className="btn btn-premium-login">Login</button>
            </div>
            
            <div className="portal-footer">
                <Link to="/support" className="help-link">Forgot your key or Order ID?</Link>
            </div>
      </div>
    </div>
  );
};

export default LoginPage; 