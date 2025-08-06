// 1.6

// import { useState } from 'react'

// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//       <h1>Give Feedback</h1>
//       <button onClick={() => setGood(good + 1)}>Good</button>   
//       <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>   
//       <button onClick={() => setBad(bad + 1)}>Bad</button>   

//       <h2>Statistics</h2>
//       <p>Good: {good}</p>
//       <p>Neutral: {neutral}</p>
//       <p>bad: {bad}</p>
//     </div>
//   )
// }

// Exercise 1.7

// import { useState } from 'react'

// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)
//   const total = good + neutral + bad
//   const average = total ? (good - bad) / total : 0
//   const positivePercentage = total ? (good / total) * 100 : 0
  
//   return (
//     <div>
//       <h1>Give Feedback</h1>
//       <button onClick={() => setGood(good + 1)}>Good</button>   
//       <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>   
//       <button onClick={() => setBad(bad + 1)}>Bad</button>   

//       <h2>Statistics</h2>
//       <p>Good: {good}</p>
//       <p>Neutral: {neutral}</p>
//       <p>Bad: {bad}</p>
//       <p>All: {total}</p>
//       <p>Average: {average}</p>
//       <p>Positive: {positivePercentage.toFixed(1)}%</p>
//     </div>
//   )
// }

import { useState } from 'react'
import Statistics from './Statistics.js/Statistics'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>

      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;