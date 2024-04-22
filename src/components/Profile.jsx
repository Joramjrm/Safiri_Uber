import React from 'react';

const Profile = () => {
  return (
    <div>
      <div style={{ display: 'flex', backgroundColor: '#ffffff', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <img src="profile.jpg" alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%', marginRight: '20px' }} />
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '24px', margin: '0 0 5px 0' }}>John Smith</h2>
          <p style={{ fontSize: '16px', color: '#666666', margin: '0' }}>Uber Driver</p>
          <div style={{ marginTop: '10px' }}>
            <p className="profile-detail">Rating: <span className="detail-value">4.9</span></p>
            <p className="profile-detail">Number of Rides: <span className="detail-value">1500</span></p>
            <p style={{ fontSize: '14px', margin: '5px 0' }}>Location: <span style={{ fontWeight: 'bold' }}>New York City</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
