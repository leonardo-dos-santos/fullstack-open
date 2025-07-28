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

// const Hello = () => {
//   return (
//     <div>
//       <p>Olá, mundo!</p>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <h1>Olá a todos!</h1>
//       <Hello />
//     </div>
//   )
// }

// export default App;

const Hello = (props) => {

  console.log(props)
  return (
    <div>
      <p>
        Olá {props.nome}, você tem {props.idade} anos
      </p>
    </div>
  )
}

const App = () => {

  const nome = 'Peter'
  const idade = 10

  return (
    <div>
      <h1>Olá a todos!</h1>
      <Hello nome='Maya' idade={26 + 10} />
      <Hello nome={nome} idade={idade} />
    </div>
  )
}

export default App;