// What should CityList receive
// An Array of Cities
// function to set the current city

import City from './City'
export default function CityList(props) {

  const parsedCities =
    Array.isArray(props.listOfCities) &&
    props.listOfCities.map(city =>
      <City
        key={city}
        cityName={city}
        current={city === props.currentCity}
        setCurrentCity={props.setCurrentCity}
      />)
  return (
    <section>
      {parsedCities}
      {!parsedCities && <p>No city provided</p>}

      {/* {parsedCities ? parsedCities : <p>No city provided</p>} */}
    </section>
  )
}