// ----- Part 1.3 -----

// import Part from "./Part";

// const Content = (props) => {
//   return (
//     <>
//       <Part name={props.part1.name} exercises={props.part1.exercises} />
//       <Part name={props.part2.name} exercises={props.part2.exercises} />
//       <Part name={props.part3.name} exercises={props.part3.exercises} />
//     </>
//   );
// };

// ----- Part 1.4 -----

// import Part from "./Part";

// const Content = (props) => {
//   return (
//     <>
//       <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
//       <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
//       <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
//     </>
//   );
// };

import Part from "./Part"

const Content = (props) => {
  return (
    <>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </>
  );
};

export default Content;
