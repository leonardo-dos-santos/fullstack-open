// const App = () => {
//   const hoje = new Date()
//   const a = 10
//   const b = 20
//   console.log(hoje, a+b)

//   return (
//     <div>
//       <p>Olá, mundo! Hoje é {hoje.toString()}</p>
//       <p>
//         {a} mais {b} é {a + b}
//       </p>
//     </div>
//   )
// }

// export default App

// -----Múltiplos componentes-----

const Hello = () => {
  return (
    <div>
      <p>Olá, mundo!</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Olá a todos!</h1>
      <Hello />
    </div>
  )
}

export default App;