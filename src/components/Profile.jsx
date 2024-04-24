import React from 'react';
import './DriverProfileCard.css'; 

const DriverProfileCard = () => {
  return (
    <div className="driver-profile-card">
      <div className="profile-image"></div>
      <div className="profile-info">
        <h2>Driver Profile</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Your Name" />
        </div>
        <div className="form-group">
          <label htmlFor="car-model">Car Model:</label>
          <input type="text" id="car-model" placeholder="Your Car Model" />
        </div>
        <div className="form-group">
          <label htmlFor="car-plate">Car Plate:</label>
          <input type="text" id="car-plate" placeholder="Your Car Plate" />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <input type="number" id="rating" placeholder="Your Rating" />
        </div>
        <button className="save-button">Save</button>
      </div>
    </div>
  );
}

export default DriverProfileCard;
