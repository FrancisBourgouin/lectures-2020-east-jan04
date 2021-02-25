import { useEffect } from "react";

export default function Spy(props) {
  useEffect(() => {
    const report = (event) => console.log(event)
    document.addEventListener('click', report)

    return () => document.removeEventListener('click', report)
  }, [])

  return <h1>I AM SPY</h1>
}

// Equivalent of 'on mount'

useEffect(() => {

}, [])

// Equivalent of 'will unmount'

useEffect(() => {
  document.addEventListener()

  return () => document.removeEventListener()
}, [])