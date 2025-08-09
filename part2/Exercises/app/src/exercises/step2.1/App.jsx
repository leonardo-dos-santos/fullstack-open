const App = () => {
  const course = {
    name: 'Desenvolvimento de aplicação Half Stack',
    parts: [
      { name: 'Fundamentos de React', exercises: 10 },
      { name: 'Usando props para passar dados', exercises: 7 },
      { name: 'Estado de um componente', exercises: 14 }
    ]
  };

  return (
    <div>
      <h1>{course.name}</h1>
      <p>{course.parts[0].name} {course.parts[0].exercises}</p>
      <p>{course.parts[1].name} {course.parts[1].exercises}</p>
      <p>{course.parts[2].name} {course.parts[2].exercises}</p>
    </div>
  );
};

export default App;
