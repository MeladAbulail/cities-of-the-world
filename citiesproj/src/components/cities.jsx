import React from 'react';
import CityCard from './CityCard';

const Cities = ({ selectedCountry, cities }) => {
  console.log(selectedCountry);
  const filteredCities = cities.filter((city) => city.country === selectedCountry);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
      {filteredCities.map((city) => (
        <CityCard key={city.id} city={city} />
      ))}
    </div>
  );
};

export default Cities;