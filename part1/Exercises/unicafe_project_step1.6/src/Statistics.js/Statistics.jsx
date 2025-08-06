//Exercise 1.8

// const Statistics = ({ good, neutral, bad }) => {
//   const total = good + neutral + bad
//   const average = total ? (good - bad) / total : 0
//   const positivePercentage = total ? (good / total) * 100 : 0

//   return (
//     <div>
//       <h2>Statistics</h2>
//        <p>Good: {good}</p>
//        <p>Neutral: {neutral}</p>
//        <p>Bad: {bad}</p>
//        <p>All: {total}</p>
//        <p>Average: {average}</p>
//        <p>Positive: {positivePercentage.toFixed(1)}%</p>
//     </div>  
//   )
// }

// Exercise 1.9

// const Statistics = ({ good, neutral, bad }) => {
//   const total = good + neutral + bad
//   const average = total ? (good - bad) / total : 0
//   const positivePercentage = total ? (good / total) * 100 : 0

//   if (total === 0) {
//     return <p>No feedback given</p>
//   }

//   return (
//     <div>
//       <p>Good: {good}</p>
//       <p>Neutral: {neutral}</p>
//       <p>Bad: {bad}</p>
//       <p>Total: {total}</p>
//       <p>Average: {average.toFixed(2)}</p>
//       <p>Positive: {positivePercentage.toFixed(1)}%</p>
//     </div>
//   )
// }

import StatisticLine from '../StatisticLine/StatisticLine'

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad

  if (total === 0) {
    return <p>No feedback given</p>
  }

  const average = (good - bad) / total
  const positivePercentage = (good / total) * 100

  return (
    <div>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="Total" value={total} />
      <StatisticLine text="Average" value={average.toFixed(2)} />
      <StatisticLine text="Positive" value={`${positivePercentage.toFixed(1)}%`} />
    </div>
  )
}

export default Statistics