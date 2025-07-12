import React from 'react';
import '../styles/UserDashboard.css';

const UserDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">User Dashboard</h1>

      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-picture"></div>

        <div className="profile-info">
          <div className="info-box">Username</div>
          <div className="info-box">Email</div>
          <div className="info-box">Points</div>
          <div className="info-box">Total Listings</div>
          <div className="info-box">Joined Date</div>
          <div className="info-box">Location</div>
          <div className="bio-box">This is a short user bio or description.</div>
        </div>
      </div>

      {/* Listings Section */}
      <h2 className="section-title">My Listings</h2>
      <div className="grid-container">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="card-box">Listing {index + 1}</div>
        ))}
      </div>

      {/* Purchases Section */}
      <h2 className="section-title">My Purchases</h2>
      <div className="grid-container">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="card-box">Purchase {index + 1}</div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
