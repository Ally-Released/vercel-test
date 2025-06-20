import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StarBorder from '../components/StarBorder';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('productKey');

  return (
    <div className="login-page-container">
        <div className="customer-portal-container">
            <div className="portal-header">
                <h2 className="portal-title">Customer Portal</h2>
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
                  placeholder={activeTab === 'productKey' ? 'Enter your product key...' : 'Enter your Order ID...'}
                />
              </div>
              <StarBorder as="button" type="submit" className="btn-portal-login">
                Access Dashboard
              </StarBorder>
            </div>
            
            <div className="portal-footer">
                <p className="help-text">Can't log in? Please contact support.</p>
            </div>
      </div>
    </div>
  );
};

export default LoginPage; 