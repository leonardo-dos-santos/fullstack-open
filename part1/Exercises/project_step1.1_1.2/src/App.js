import Header from "./Header/Header";
import Content from "./Content/Content";
import Total from "./Total/Total";

const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack';
  const part1 = 'Fundamentos da biblioteca React'
  const exercises1 = 10
  const part2 = 'Usando props para passar dados'
  const exercises2 = 7
  const part3 = 'Estado de um componente'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} exercises1={exercises1}
               part2={part2} exercises2={exercises2}
               part3={part3} exercises3={exercises3}/>
      <Total exercises1={exercises1}
             exercises2={exercises2}
             exercises3={exercises3}/>
    </div>
  )
}

export default App;

// import Header from "./Header/Header";
// import Content from "./Content/Content";
// import Total from "./Total/Total";

// const App = () => {
//   const course = 'Desenvolvimento de aplicação Half Stack';
//   const part1 = 'Fundamentos da biblioteca React'
//   const exercises1 = 10
//   const part2 = 'Usando props para passar dados'
//   const exercises2 = 7
//   const part3 = 'Estado de um componente'
//   const exercises3 = 14

//   return (
//     <div>
//       <Header course={course}/>
//       <Content part1={part1} exercises1={exercises1}
//                part2={part2} exercises2={exercises2}
//                part3={part3} exercises3={exercises3}/>
//       <Total {props.exercises1 + props.exercises2 + props.exercises3}/>
//     </div>
//   )
// }

// export default App;