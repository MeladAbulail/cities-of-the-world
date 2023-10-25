import React, { useState } from 'react'
import Header from './header'
import Footer from './footer'
import '../App.css'
import Hero from './hero'
import Cities from './cities'

const Home = ({citiesData}) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const countries = Array.from(new Set(citiesData.map(city => city.country)));

  return (
    <div>
      <Hero countries={countries} setSelectedCountry={setSelectedCountry}/>
      {console.log(selectedCountry)}
      {selectedCountry && <Cities selectedCountry={selectedCountry} cities={citiesData} />}
    </div>
  )
}

export default Home