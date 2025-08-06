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

// Exercise 1.8 and 1.9

// import { useState } from 'react'
// import Statistics from './Statistics.js/Statistics'

// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//       <h1>Give feedback</h1>
//       <button onClick={() => setGood(good + 1)}>Good</button>
//       <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
//       <button onClick={() => setBad(bad + 1)}>Bad</button>

//       <h2>Statistics</h2>
//       <Statistics good={good} neutral={neutral} bad={bad} />
//     </div>
//   )
// }

// Exercise 1.10 and 1.11

// import { useState } from 'react'
// import Statistics from './Statistics.js/Statistics'
// import Button from './Button/Button'

// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//       <h1>Give feedback</h1>
//       <Button onClick={() => setGood(good + 1)} text="Good" />
//       <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
//       <Button onClick={() => setBad(bad + 1)} text="Bad" />

//       <h2>Statistics</h2>
//       <Statistics good={good} neutral={neutral} bad={bad} />
//     </div>
//   )
// }


//Exercise 1.12

// import { useState } from 'react'

// const App = () => {
//   const anecdotes = [
//     'Se fazer algo dói, faça isso com mais frequência.',
//     'Contratar mão de obra para um projeto de software que já está atrasado, faz com que se atrase mais ainda!',
//     'Os primeiros 90% do código correspondem aos primeiros 10% do tempo de desenvolvimento... Os outros 10% do código correspondem aos outros 90% do tempo de desenvolvimento.',
//     'Qualquer tolo escreve código que um computador consegue entender. Bons programadores escrevem código que humanos conseguem entender.',
//     'Otimização prematura é a raiz de todo o mal.',
//     'Antes de mais nada, depurar é duas vezes mais difícil do que escrever o código. Portanto, se você escrever o código da forma mais inteligente possível, você, por definição, não é inteligente o suficiente para depurá-lo.',
//     'Programar sem o uso extremamente intenso do console.log é o mesmo que um médico se recusar a usar raio-x ou testes sanguíneos ao diagnosticar pacientes.',
//     'A única maneira de ir rápido é ir bem.'
//   ]

//   const [selected, setSelected] = useState(0)

//   const handleNext = () => {
//     const randomIndex = Math.floor(Math.random() * anecdotes.length)
//     setSelected(randomIndex)
//   }

//   return (
//     <div>
//       <h1>Anecdote of the day</h1>
//       <p>{anecdotes[selected]}</p>
//       <button onClick={handleNext}>Próxima anedota</button>
//     </div>
//   )
// }

// Exercise 1.13

// import { useState } from 'react'

// const App = () => {
//   const anecdotes = [
//     'Se fazer algo dói, faça isso com mais frequência.',
//     'Contratar mão de obra para um projeto de software que já está atrasado, faz com que se atrase mais ainda!',
//     'Os primeiros 90% do código correspondem aos primeiros 10% do tempo de desenvolvimento... Os outros 10% do código correspondem aos outros 90% do tempo de desenvolvimento.',
//     'Qualquer tolo escreve código que um computador consegue entender. Bons programadores escrevem código que humanos conseguem entender.',
//     'Otimização prematura é a raiz de todo o mal.',
//     'Antes de mais nada, depurar é duas vezes mais difícil do que escrever o código. Portanto, se você escrever o código da forma mais inteligente possível, você, por definição, não é inteligente o suficiente para depurá-lo.',
//     'Programar sem o uso extremamente intenso do console.log é o mesmo que um médico se recusar a usar raio-x ou testes sanguíneos ao diagnosticar pacientes.',
//     'A única maneira de ir rápido é ir bem.'
//   ]

//   const [selected, setSelected] = useState(0)
//   const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

//   const handleNext = () => {
//     const randomIndex = Math.floor(Math.random() * anecdotes.length)
//     setSelected(randomIndex)
//   }

//   const handleVote = () => {
//     const copy = [...votes]
//     copy[selected] += 1
//     setVotes(copy)
//   }

//   return (
//     <div>
//       <h1>Anecdote of the day</h1>
//       <p>{anecdotes[selected]}</p>
//       <p>has {votes[selected]} vote(s)</p>

//       <button onClick={handleVote}>Vote</button>
//       <button onClick={handleNext}>Próxima anedota</button>
//     </div>
//   )
// }

import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'Se fazer algo dói, faça isso com mais frequência.',
    'Contratar mão de obra para um projeto de software que já está atrasado, faz com que se atrase mais ainda!',
    'Os primeiros 90% do código correspondem aos primeiros 10% do tempo de desenvolvimento... Os outros 10% do código correspondem aos outros 90% do tempo de desenvolvimento.',
    'Qualquer tolo escreve código que um computador consegue entender. Bons programadores escrevem código que humanos conseguem entender.',
    'Otimização prematura é a raiz de todo o mal.',
    'Antes de mais nada, depurar é duas vezes mais difícil do que escrever o código. Portanto, se você escrever o código da forma mais inteligente possível, você, por definição, não é inteligente o suficiente para depurá-lo.',
    'Programar sem o uso extremamente intenso do console.log é o mesmo que um médico se recusar a usar raio-x ou testes sanguíneos ao diagnosticar pacientes.',
    'A única maneira de ir rápido é ir bem.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const maxVotes = Math.max(...votes)
  const mostVotedIndex = votes.indexOf(maxVotes)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} vote(s)</p>

      <button onClick={handleVote}>Vote</button>
      <button onClick={handleNext}>Próxima anedota</button>

      <h2>Anecdote with most votes</h2>
      {maxVotes === 0 ? (
        <p>Nenhuma anedota foi votada ainda.</p>
      ) : (
        <>
          <p>{anecdotes[mostVotedIndex]}</p>
          <p>com {maxVotes} voto(s)</p>
        </>
      )}
    </div>
  )
}

export default App;