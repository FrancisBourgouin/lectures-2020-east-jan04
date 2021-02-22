// What should CityList receive
// An Array of Cities
// function to set the current city

import { render, fireEvent } from '@testing-library/react'
import CityList from '../CityList'

describe('Behavior of the citylist component', () => {
  it('should show a list of city buttons', () => {
    const listOfCities = ['Montréal', 'Toronto', 'Ottawa', 'Oakville', 'Puvirnituq']
    const { getByText, getAllByTestId } = render(<CityList listOfCities={listOfCities} />)

    for (const city of listOfCities) {
      expect(getByText(city)).toBeInTheDocument()
    }

  })
  it('should show a error message if we don\'t provide a a valid city list', () => {
    const { getByText } = render(<CityList listOfCities={{}} />)

    expect(getByText('No city provided')).toBeInTheDocument()
  })
  it('should show a error message if we don\'t provide a citylist array', () => {
    const { getByText } = render(<CityList />)

    expect(getByText('No city provided')).toBeInTheDocument()
  })
})