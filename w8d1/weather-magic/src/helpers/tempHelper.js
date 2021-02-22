export const kelvinToCelsius = (tempInK) => {
  const conversionResult = Math.round((tempInK - 273.15) * 10) / 10
  if (Number.isNaN(conversionResult) || tempInK < 0) {
    return null
  }
  return conversionResult
}

