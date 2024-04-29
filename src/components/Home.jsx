import React, { useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import './Home.css';

const Home = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [originLatLng, setOriginLatLng] = useState(null);
  const [destLatLng, setDestLatLng] = useState(null);
  const [distance, setDistance] = useState(null);
  const [input, setInput] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [moneyPerKilometer, setMoneyPerKilometer] = useState(null);
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [isBookingNow, setIsBookingNow] = useState(true);

  const handleBookingTypeChange = (e) => {
    setIsBookingNow(e.target.value === 'now');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      pickupLocation,
      dropoffLocation,
      vehicleType,
      dateTime,
      isBookingNow,
    });
  };

  


  const calculateDistance = () => {
    if (originLatLng && destLatLng) {
      const R = 6371; 
      const dLat = deg2rad(destLatLng.lat - originLatLng.lat);
      const dLon = deg2rad(destLatLng.lng - originLatLng.lng);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(originLatLng.lat)) * Math.cos(deg2rad(destLatLng.lat)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const d = R * c; 
      setDistance(d.toFixed(2));
    }
  };

  const handleCalculate = () => {
    if (distance && totalAmount) {
      const moneyPerKilometerValue = parseFloat(totalAmount) * parseFloat(distance);
      setMoneyPerKilometer(moneyPerKilometerValue.toFixed(2));
    } else {
      setMoneyPerKilometer(13);
    }
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  const libraries = ['places', 'directions'];
  const mapContainerStyle = {
    width: '864px',
    height: '494px',
  };
  const defaultCenter = {
    lat: -1.2884304797973953, 
    lng: 36.75589129021692,
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBpcm97vlVJh8svulYaYacFd8tKP4W2jZc',
    libraries,
  });

  useEffect(() => {
    if (isLoaded && !loadError) {
      if (origin) {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(origin)}&key=AIzaSyBpcm97vlVJh8svulYaYacFd8tKP4W2jZc`)
          .then(response => response.json())
          .then(data => {
            if (data.results.length > 0) {
              const { lat, lng } = data.results[0].geometry.location;
              setOriginLatLng({ lat, lng });
            }
          })
          .catch(error => console.error('Error fetching origin location:', error));
      }
      if (destination) {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(destination)}&key=AIzaSyBpcm97vlVJh8svulYaYacFd8tKP4W2jZc`)
          .then(response => response.json())
          .then(data => {
            if (data.results.length > 0) {
              const { lat, lng } = data.results[0].geometry.location;
              setDestLatLng({ lat, lng });
            }
          })
          .catch(error => console.error('Error fetching destination location:', error));
      }
    }
  }, [origin, destination, isLoaded, loadError]);

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div  className='input-wrapper'>
      <div className='map'>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={defaultCenter}
      >
        {originLatLng && <Marker position={originLatLng} />}
        {destLatLng && <Marker position={destLatLng} />}
      </GoogleMap>
      </div>
      <div className='input'>
        <h1 className='text'>Request a ride</h1>
        <div className='info1'>
        <input
          placeholder="Enter origin"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
        </div>
        <div className='info2'>
        <input
          placeholder="Enter destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        </div>
        <div>
          <button onClick={calculateDistance}>Calculate Distance</button>
          {distance && <p>Distance: {distance} km</p>}
        </div>
        
        
        
        <div>
          <label htmlFor="totalAmountInput">Amout per Kilometer:</label>
          <input
            id="totalAmountInput"
            value={totalAmount}
            onChange={(e) => setTotalAmount(13)}
          />
        </div>
        <button onClick={handleCalculate}>Payment fee</button>
        {moneyPerKilometer !== null && (
          <p> Ksh{moneyPerKilometer}</p>
        )}
    </div>
    <div className='booking'>
      <h2>Book a Ride</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Pickup Location:
          <input
            type="text"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
          />
        </label>
        <br />
        <label>
          Drop-off Location:
          <input
            type="text"
            value={dropoffLocation}
            onChange={(e) => setDropoffLocation(e.target.value)}
          />
        </label>
        <br />
        <label>
          Vehicle Type:
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
          >
            <option value="">Select</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="van">Van</option>
          </select>
        </label>
        <br />
        <label>
          {isBookingNow ? 'Pickup Time:' : 'Date & Time:'}
          <input
            type={isBookingNow ? 'time' : 'datetime-local'}
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="now"
            checked={isBookingNow}
            onChange={handleBookingTypeChange}
          />
          Book for Now
        </label>
        <label>
          <input
            type="radio"
            value="later"
            checked={!isBookingNow}
            onChange={handleBookingTypeChange}
          />
          Book for Later
        </label>
        <br />
        <div className='book'>
        <button type="submit">Book Ride</button>
        </div>
      </form>
    </div>
    <div className='Text'>
      <h1>The Uber you know, reimagined for business</h1>
      <h2>Uber for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size.
      Uber's value proposition lies in its unparalleled combination of convenience, safety, affordability, and reliability, making it the optimal choice for modern travelers.

Convenience: With Uber, convenience reigns supreme. 
 
Safety: Safety is paramount at Uber.

Affordability: Uber offers competitive pricing that won't break the bank.

Reliability: Count on Uber to be there when you need it most. 

In essence, Uber offers a transportation solution that seamlessly integrates convenience, safety, affordability, and reliability, providing users with a superior alternative to traditional transportation options.

      </h2>
    </div>
    </div>
  );
};

export default Home;