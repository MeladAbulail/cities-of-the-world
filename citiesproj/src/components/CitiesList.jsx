import React from 'react'
import CityCard from './CityCard.jsx'

const CitiesList = ({citiesData}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
      {citiesData.map((city) => (
        <CityCard key={city.id} city={city} />
      ))}
    </div>
  )
}

export default CitiesList