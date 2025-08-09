import Course from './Course';

const App = () => {
  const course = {
    name: 'Desenvolvimento de aplicação Half Stack',
    parts: [
      { name: 'Fundamentos de React', exercises: 10, id: 1 },
      { name: 'Usando props para passar dados', exercises: 7, id: 2 },
      { name: 'Estado de um componente', exercises: 14, id: 3 }
    ]
  };

  return <Course course={course} />;
};

export default App;
