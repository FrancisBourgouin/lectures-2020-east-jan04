import React from 'react'

class RepoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      repo: "Po",
      user: "tato"
    }
    // this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit = event => {
    event.preventDefault()
    this.props.updateGithubInfo(this.state)
  }
  handleChange = event => {
    const { name, value } = event.target
    this.setState({ ...this.state, [name]: value })
  }
  render() {
    const { handleChange, handleSubmit, state } = this
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="repo" placeholder="Enter the repo name" value={state.repo} onChange={handleChange} />
        <input type="text" name="user" placeholder="Enter the username" value={state.user} onChange={handleChange} />
        <button type="submit">Fetch!</button>
      </form>
    )
  }
}

export default RepoForm