import React from 'react'

const Hero = ({countries,setSelectedCountry}) => {
  return (
    <div className="hero w-auto flex justify-center items-center text-white text-xl ">
      <div className="content">
        <h1>Welcome to a Global Journey</h1>
        <label for="cities" class="block mb-2 text-sm font-medium text-white dark:text-white">Select an option</label>
        <select onChange={(e) => setSelectedCountry(e.target.value)} id="cities" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Choose a country</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Hero