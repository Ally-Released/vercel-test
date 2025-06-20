import React from 'react';

const DashboardPage = () => {
  return (
    <div style={{minHeight: '100vh', position: 'relative'}}>
      <div className="container" style={{position: 'relative', zIndex: 1}}>
        <h1 style={{paddingTop: 'var(--space-4xl)'}}>Welcome to your Dashboard</h1>
        <p>This is a protected area. You can view your product details and access user guides here.</p>
        <div className="dashboard-grid">
          <div className="dashboard-card user-info">
            <h3>Welcome, User</h3>
            <p>Email: user@example.com</p>
            <p>Subscription: Active</p>
          </div>
          <div className="dashboard-card product-info">
            <h3>Product Details</h3>
            <p>Version: 1.2.3</p>
            <p>Status: Operational</p>
            <button className="btn btn-secondary">Download</button>
          </div>
          <div className="dashboard-card recent-activity">
            <h3>Recent Activity</h3>
            <ul>
              <li>Logged in from new location.</li>
              <li>Updated profile information.</li>
              <li>Downloaded latest version.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage; 