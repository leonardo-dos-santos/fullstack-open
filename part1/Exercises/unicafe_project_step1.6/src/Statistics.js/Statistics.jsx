const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = total ? (good - bad) / total : 0
  const positivePercentage = total ? (good / total) * 100 : 0

  return (
    <div>
      <h2>Statistics</h2>
       <p>Good: {good}</p>
       <p>Neutral: {neutral}</p>
       <p>Bad: {bad}</p>
       <p>All: {total}</p>
       <p>Average: {average}</p>
       <p>Positive: {positivePercentage.toFixed(1)}%</p>
    </div>  
  )
}

export default Statistics