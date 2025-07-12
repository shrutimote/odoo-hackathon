import React from 'react';
import '../styles/AdminPanel.css';

const AdminPanel = () => {
  return (
    <div className="admin-container">
      {/* Header */}
      <h1 className="admin-title">Admin Panel</h1>

      {/* Nav Buttons */}
      <div className="admin-tabs">
        <button className="tab">Manage Users</button>
        <button className="tab">Manage Orders</button>
        <button className="tab">Manage Listings</button>
      </div>

      {/* Section Title */}
      <h2 className="section-title">Manage Users</h2>

      {/* User List */}
      <div className="user-list">
        {[...Array(4)].map((_, i) => (
          <div className="user-card" key={i}>
            {/* Profile Icon */}
            <div className="user-avatar"></div>

            {/* User Details */}
            <div className="user-details">
              <p><strong>User {i + 1}</strong></p>
              <p>Email: user{i + 1}@example.com</p>
              <p>Status: Active</p>
            </div>

            {/* Actions */}
            <div className="user-actions">
              <button>Action 1</button>
              <button>Action 2</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
