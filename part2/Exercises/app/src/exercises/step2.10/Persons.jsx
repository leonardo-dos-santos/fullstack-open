const Person = ({ person }) => (
  <li>{person.name} — {person.number}</li>
)

const Persons = ({ personsToShow }) => (
  <ul>
    {personsToShow.map(person => 
      <Person key={person.id} person={person} />
    )}
  </ul>
)

export default { Person, Persons }