const handleLight = () => {
  const light = {
    on: false,
    color: "white"
  }

  const setLight = (on, color) => {
    light.on = on
    light.color = color
  }

  return [light, setLight]
}

const [light, setLight] = handleLight()

console.log(light)

setLight(true, 'white')

console.log(light)

const turnOff = () => {
  console.log(light)
  setLight(false, 'white')
  console.log(light)
}

module.exports = turnOff


// anotherfile.js

module.exports = (db) => {

  ...
}