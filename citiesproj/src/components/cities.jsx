import React from 'react';

function Cities({ selectedCountry, cities }) {
  return (
    <div>
      <h2>Cities in {selectedCountry}</h2>
      <div className="city-cards">
        {cities.map(city => (
          <div className="city-card" key={city.id}>
            <h3>{city.name}</h3>
            <p>Country: {city.country}</p>
            <p>{city.info}</p>
            <img src={city.img} alt={city.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cities;