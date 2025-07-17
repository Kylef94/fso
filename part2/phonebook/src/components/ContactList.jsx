const Person = ({person}) => <p>{person.name} {person.number}</p>

const ContactList = ({persons, search}) => {
  const filterByName = () => persons.filter((person) => person.name.toLowerCase().includes(search.toLowerCase()))
  
  return (filterByName().map((person) => <Person key={person.name} person={person} />))
}

export default ContactList