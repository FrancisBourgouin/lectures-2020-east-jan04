import { useState } from "react"

export default function RepoForm(props) {
  const [repoInfo, setRepoInfo] = useState({
    repo: "",
    user: ""
  })
  // const [repo, setRepo] = useState("")
  // const [user, setUser] = useState("")

  const handleSubmit = event => {
    console.log('maybe?')
    event.preventDefault()
    props.updateGithubInfo(repoInfo)
  }

  const handleChange = event => {
    const { name, value } = event.target
    setRepoInfo({ ...repoInfo, [name]: value })
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="repo" placeholder="Enter the repo name" onChange={handleChange} value={repoInfo.repo} />
      <input type="text" name="user" placeholder="Enter the username" onChange={handleChange} value={repoInfo.user} />
      <button type="submit">Fetch!</button>
    </form>
  )
}