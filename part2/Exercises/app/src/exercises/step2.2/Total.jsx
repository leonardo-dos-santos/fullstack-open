const Total = ({ parts }) => {
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises;

  return <p>Total de {total} exercícios</p>;
};

export default Total;
