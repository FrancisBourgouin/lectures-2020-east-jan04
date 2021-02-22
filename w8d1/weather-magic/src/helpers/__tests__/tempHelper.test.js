import { kelvinToCelsius } from '../tempHelper'

describe("Kelvin to Celsius conversion", () => {
  it('should return the null if the given value is not a valid number', () => {
    const result = kelvinToCelsius("i am a temperature")

    // expect(result).toBe(null)
    expect(result).toBeNull()
  })
  it('should return the null if the given value is -273.15', () => {
    const result = kelvinToCelsius(-100)

    // expect(result).toBe(null)
    expect(result).toBeNull()
  })
  it('should return the 0 if the given value is 273.15', () => {
    const result = kelvinToCelsius(273.15)

    // expect(result).toBe(null)
    expect(result).toBe(0)
  })
  it('should return the 20.4 if the given value is 293.5432', () => {
    const result = kelvinToCelsius(293.5432)

    // expect(result).toBe(null)
    expect(result).toBe(20.4)
  })
})