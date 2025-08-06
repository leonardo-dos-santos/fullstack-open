//Exercise 1.10

// const StatisticLine = ({ text, value }) => {
//   return (
//     <p>
//       {text}: {value}
//     </p>
//   )
// }

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

export default StatisticLine
