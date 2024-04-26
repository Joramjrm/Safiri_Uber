import React, { useState } from 'react';
import './Profile.css'

const Profile = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [carPlate, setCarPlate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Car Plate:', carPlate);
  };

  return (
    <div className="profile-card">
      <h2>Profile Card</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="carPlate">Car Plate:</label>
          <input
            type="text"
            id="carPlate"
            value={carPlate}
            onChange={(e) => setCarPlate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Save Profile</button>
      </form>
      <div className="profile-preview">
        <h3>Profile Preview</h3>
        <p><strong>Full Name:</strong> {fullName}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone Number:</strong> {phoneNumber}</p>
        <p><strong>Car Plate:</strong> {carPlate}</p>
      </div>
    </div>
  );
};

export default Profile;