import { useState } from 'react'

const FeedbackInput = ({goodClick, neutralClick, badClick}) => {
  return (
  <div className="feedback">
    <h1>Give feedback</h1>
    <button className="good-button" onClick={goodClick}>Good</button>
    <button className="neutral-button" onClick={neutralClick}>Neutral</button>
    <button className="bad-button" onClick={badClick}>Bad</button>
  </div>)
}

const Statistics = ({goodStat, neutralStat, badStat}) => {
  return (
    <div className="statistics">
      <h1>Statistics</h1>
      <p>good {goodStat}</p>
      <p>neutral {neutralStat}</p>
      <p>bad {badStat}</p>
    </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <FeedbackInput goodClick={handleGoodClick}
                    neutralClick={handleNeutralClick} 
                    badClick={handleBadClick} 
                     />
      <Statistics goodStat={good} neutralStat={neutral} badStat={bad}/>
    </div>
  )
}

export default App
