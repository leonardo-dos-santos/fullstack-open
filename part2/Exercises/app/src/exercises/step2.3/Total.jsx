const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);

  return <p>Total de {total} exercícios</p>;
};

export default Total;
