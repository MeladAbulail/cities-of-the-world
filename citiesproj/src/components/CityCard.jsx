import React from 'react'

const CityCard = ({city}) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">{city.name}</h2>
      <img src={city.img} alt={city.name} className="w-full h-52 object-cover mb-2" />
      <p>{city.info}</p>
    </div>
  )
}

export default CityCard