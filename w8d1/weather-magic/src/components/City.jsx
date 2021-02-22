// Needs of city
// City Name
// A function to set as current city
// small differenciator for the current selected city

export default function City(props) {

  return (
    <button
      className={`${props.current ? 'current' : ''}`}
      onClick={() => props.setCurrentCity(props.cityName)}
    >
      {props.cityName}
    </button>
  )
}