import React, { useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';


const libraries = ['places'];
const mapContainerStyle = {
  width: '1264px',
  height: '494px',
};
const defaultCenter = {
  lat: 37.7749,
  lng: -122.4194,
};

const Home = () => {
  const [input, setInput] = useState('');
  const [center, setCenter] = useState(defaultCenter);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBpcm97vlVJh8svulYaYacFd8tKP4W2jZc',
    libraries,
  });

  useEffect(() => {
    setCenter({
      lat: parseFloat(input) || defaultCenter.lat,
      lng: defaultCenter.lng,
    });
  }, [input]);

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div className='input-wrapper'>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={18}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className='bg-white max-w-mg mx-auto shadow-lg space-x-4 justify-center items-center '>
            <h1 className='text-2xl font-bold '>Drive when you want, make what you need</h1>
            <p className='text-gray-700 '>Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber.</p>
            <img src='' className='w-full' />
        </div>
      <div className='bg-white max-w-mg mx-auto shadow-lg space-x-4 justify-center items-center '>
            <h1 className='text-2xl font-bold '></h1>
            <p className='text-gray-700 '></p>
            <img src='' className='w-full' />
        </div>
    </div>
    
  );
};

export default Home;
