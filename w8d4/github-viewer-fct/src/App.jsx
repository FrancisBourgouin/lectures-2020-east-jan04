import logo from './logo.svg';
import './App.css';
import RepoForm from './components/RepoForm';
import { useEffect, useState } from 'react';
import axios from 'axios'
import CommitList from './components/CommitList';

function App() {
  const [repoInfo, setRepoInfo] = useState(null)
  const [commitData, setCommitData] = useState(null)

  useEffect(() => {
    if (repoInfo) {
      axios
        .get(`https://api.github.com/repos/${repoInfo.user}/${repoInfo.repo}/commits`)
        .then(res => setCommitData(res.data))
    }
  }, [repoInfo])

  const updateGithubInfo = (formInfo) => {
    setRepoInfo(formInfo)
  }

  return (
    <div className="App">
      <h1>Github Viewer</h1>
      <RepoForm updateGithubInfo={updateGithubInfo} />
      <CommitList commitData={commitData} />
    </div>
  );
}

export default App;
