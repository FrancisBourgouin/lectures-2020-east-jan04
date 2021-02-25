import SingleCommit from './SingleCommit'

export default function CommitList(props) {
  const parsedCommits = props.commitData && props.commitData.map(commitObj => (
    <SingleCommit
      key={commitObj.sha}
      title={commitObj.commit.message}
      commiter={commitObj.commit.author.name}
    />
  )
  )
  return (
    <section>
      {parsedCommits}
      {!props.commitData && <p>No commits here!</p>}
    </section>
  )
}