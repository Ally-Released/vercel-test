import React from 'react';

const DashboardPage = () => {
  return (
    <section className="dashboard-section">
      <div className="container">
        <h2>Dashboard</h2>
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
    </section>
  );
};

export default DashboardPage; 