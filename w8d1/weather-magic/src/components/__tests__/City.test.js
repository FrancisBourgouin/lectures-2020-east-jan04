import { render, fireEvent } from '@testing-library/react'
// import { toBeInTheDocument } from '@testing-library/jest-dom'
import City from '../City'

// Needs of city
// City Name
// A function to set as current city
// small differenciator for the current selected city

describe('City component behavior', () => {
  it('should show the name of the given city', () => {
    const { getByText } = render(<City cityName="Montréal" current />)

    expect(getByText('Montréal')).toBeInTheDocument()
  })
  it('should show a specific class when it is the current city', () => {
    const { getByText } = render(<City cityName="Montréal" current />)
    // console.log(render(<City cityName="Montréal" />))

    expect(getByText('Montréal')).toHaveClass('current')
  })
  it('should not show a specific class when it is not the current city', () => {
    const { getByText } = render(<City cityName="Montréal" />)
    // console.log(render(<City cityName="Montréal" />))

    expect(getByText('Montréal')).not.toHaveClass('current')
  })
  it('should trigger an action when we click on it', () => {
    const clickFunction = jest.fn()
    const { getByText } = render(<City cityName="Montréal" setCurrentCity={clickFunction} />)

    fireEvent.click(getByText('Montréal'))

    expect(clickFunction).toHaveBeenCalled()
  })
})