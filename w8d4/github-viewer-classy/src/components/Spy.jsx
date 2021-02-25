import React from 'react'

class Spy extends React.Component {
  constructor(props) {
    super(props)
  }
  report = (event) => console.log(event)

  componentDidMount() {
    document.addEventListener('click', this.report)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.report)
  }

  render() {

    return <h1 style={{ fontSize: 5 }} onClick={this.props.sleepWithTheFishes}> I AM SPY</h1 >
  }
}

export default Spy