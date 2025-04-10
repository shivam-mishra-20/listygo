import React, { useState } from 'react';

const Header = () => {
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');

  return (
    <div className="w-full bg-gradient-to-r from-white via-white/90 to-transparent relative overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 py-12 md:py-20">
        
        {/* LEFT SIDE CONTENT */}
        <div className="w-full md:w-1/2 z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Vacation Rentals in India
          </h1>
          <p className="text-lg text-gray-700 mb-10">
            Find and book unique accommodation on Rentals
          </p>

          {/* SEARCH BAR */}
          <div className="bg-white rounded-full shadow-md flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x overflow-hidden w-full max-w-xl">
            {/* Location Dropdown */}
            <div className="p-4 flex-1">
              <label className="font-semibold text-sm text-gray-800">Location</label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-transparent outline-none text-gray-600 mt-1"
              >
                <option value="">Where are you going?</option>
                <option value="delhi">Delhi</option>
                <option value="mumbai">Mumbai</option>
                <option value="goa">Goa</option>
              </select>
            </div>

            {/* Category Dropdown */}
            <div className="p-4 flex-1">
              <label className="font-semibold text-sm text-gray-800">Select Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-transparent outline-none text-gray-600 mt-1"
              >
                <option value="">Choose category</option>
                <option value="beach">Beachside</option>
                <option value="mountain">Mountain View</option>
                <option value="luxury">Luxury</option>
              </select>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="w-full md:w-1/2 relative mt-10 md:mt-0">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://source.unsplash.com/800x600/?vacation,beach,hotel"
              alt="Vacation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* FOOTER ILLUSTRATION (OPTIONAL) */}
      <div className="absolute bottom-0 left-0 w-full hidden md:block">
        <img
          src="https://i.ibb.co/Vv2PzTw/india-monuments.png"
          alt="India Monuments"
          className="w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Header;
