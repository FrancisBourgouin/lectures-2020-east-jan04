import React from 'react'
import axios from 'axios'

import RepoForm from './components/RepoForm';
import CommitList from './components/CommitList';
import Spy from './components/Spy'

import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      repoData: null,
      commitData: null,
      foundSpy: false
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.repoData) {
      const { user, repo } = this.state.repoData
      if (!prevState.repoData) {
        axios
          .get(`https://api.github.com/repos/${user}/${repo}/commits`)
          .then(res => this.setState({ ...this.state, commitData: [...res.data] }))
      } else if (user !== prevState.repoData.user || repo !== prevState.repoData.repo) {
        axios
          .get(`https://api.github.com/repos/${user}/${repo}/commits`)
          .then(res => this.setState({ ...this.state, commitData: [...res.data] }))
      }
    }
  }

  updateGithubInfo = repoInfo => {
    this.setState({ ...this.state, repoData: { ...repoInfo } })
  }

  sleepWithTheFishes = () => {
    this.setState({ ...this.state, foundSpy: true })
  }

  render() {
    const { updateGithubInfo, state, sleepWithTheFishes } = this
    return (
      <div className="App">
        <RepoForm updateGithubInfo={updateGithubInfo} />
        {state.commitData && <CommitList commitData={state.commitData} />}
        {!state.foundSpy && <Spy sleepWithTheFishes={sleepWithTheFishes} />}
      </div>
    );
  }
}

export default App;
