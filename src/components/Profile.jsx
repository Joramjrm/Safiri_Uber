import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './Profile.css';

const Profile = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [carPlate, setCarPlate] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [comment, setComment] = useState('');

  const handleMouseOver = (index) => {
    setHover(index);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Car Plate:', carPlate);
    console.log('Rating:', rating);
    console.log('Comment:', comment);
    // Reset form fields after submission
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setCarPlate('');
    setRating(0);
    setComment('');
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
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
            min={0}
            max={5}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
          />
        </div>
        <button type="submit">Submit Review</button>
      </form>

      <h3>Profile Preview</h3>
      <p><strong>Full Name:</strong> {fullName}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone Number:</strong> {phoneNumber}</p>
      <p><strong>Car Plate:</strong> {carPlate}</p>
    </div>
  );
};

export default Profile;
