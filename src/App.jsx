import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import BuyPage from './pages/BuyPage';
import PolicyPage from './pages/PolicyPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/policy" element={<PolicyPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
