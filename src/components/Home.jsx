// import React, { useState, useEffect } from 'react';
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

// function Home() {
//   const [lat1, setLat1] = useState('');
//   const [lon1, setLon1] = useState('');
//   const [lat2, setLat2] = useState('');
//   const [lon2, setLon2] = useState('');
//   const [distance, setDistance] = useState(null);
  
//   const calculateDistance = () => {
//     const R = 6371; 
//     const dLat = deg2rad(lat2 - lat1);
//     const dLon = deg2rad(lon2 - lon1);
//     const a =
//       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//       Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
//       Math.sin(dLon / 2) * Math.sin(dLon / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     const d = R * c; // Distance in km
//     setDistance(d);
//   }

//   const deg2rad = (deg) => {
//     return deg * (Math.PI / 180);
//   }

// const libraries = ['places'];
// const mapContainerStyle = {
//   width: '1264px',
//   height: '494px',
// };
// const defaultCenter = {
//   lat: 37.7749,
//   lng: -122.4194,
// };

// const Home = () => {
//   const [input, setInput] = useState('');
//   const [center, setCenter] = useState(defaultCenter);

//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: 'AIzaSyBpcm97vlVJh8svulYaYacFd8tKP4W2jZc',
//     libraries,
//   });

//   useEffect(() => {
//     setCenter({
//       lat: parseFloat(input) || defaultCenter.lat,
//       lng: defaultCenter.lng,
//     });
//   }, [input]);

//   if (loadError) {
//     return <div>Error loading maps</div>;
//   }

//   if (!isLoaded) {
//     return <div>Loading maps</div>;
//   }

//   return (
//     <div className='input-wrapper'>
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         zoom={18}
//         center={center}
//       >
//         <Marker position={center} />
//       </GoogleMap>
//       <input
//         placeholder="Type to search..."
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <div>
//       <h2>Distance Calculator</h2>
//       <label>
//         Latitude 1:
//         <input type="text" value={lat1} onChange={(e) => setLat1(parseFloat(e.target.value))} />
//       </label>
//       <br />
//       <label>
//         Longitude 1:
//         <input type="text" value={lon1} onChange={(e) => setLon1(parseFloat(e.target.value))} />
//       </label>
//       <br />
//       <label>
//         Latitude 2:
//         <input type="text" value={lat2} onChange={(e) => setLat2(parseFloat(e.target.value))} />
//       </label>
//       <br />
//       <label>
//         Longitude 2:
//         <input type="text" value={lon2} onChange={(e) => setLon2(parseFloat(e.target.value))} />
//       </label>
//       <br />
//       <button onClick={calculateDistance}>Calculate Distance</button>
//       {distance && <p>Distance: {distance.toFixed(2)} km</p>}
//     </div>
//     </div>
    
//   );
// };

// export default Home;

import React, { useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const Home = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [originLatLng, setOriginLatLng] = useState(null);
  const [destLatLng, setDestLatLng] = useState(null);
  const [distance, setDistance] = useState(null);
  const [input, setInput] = useState('');

  const calculateDistance = () => {
    if (originLatLng && destLatLng) {
      const R = 6371; // Radius of the earth in km
      const dLat = deg2rad(destLatLng.lat - originLatLng.lat);
      const dLon = deg2rad(destLatLng.lng - originLatLng.lng);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(originLatLng.lat)) * Math.cos(deg2rad(destLatLng.lat)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const d = R * c; // Distance in km
      setDistance(d.toFixed(2));
    }
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  const libraries = ['places'];
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
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={defaultCenter}
      >
        {originLatLng && <Marker position={originLatLng} />}
        {destLatLng && <Marker position={destLatLng} />}
      </GoogleMap>
      <input
        placeholder="Enter origin"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
      />
      <input
        placeholder="Enter destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <div>
        <button onClick={calculateDistance}>Calculate Distance</button>
        {distance && <p>Distance: {distance} km</p>}
      </div>
    </div>
  );
};

export default Home;
