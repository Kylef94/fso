import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const filterByName = () => {
    if (search === '') {
      return persons
    }
    else {
      return persons.filter((person) => person.name.toLowerCase().includes(search.toLowerCase()))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (persons.find(person => person.name == newName)) {
      alert(`${newName} is already in the phonebook!`)
    }
    else {
      setPersons(persons.concat({
        name: newName, 
        number: newNumber,
        id: persons.length + 1
      }))
    }
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form action="">
        <div>filter shown with <input value={search} onChange={handleSearchChange} /></div>
      </form>
      <form onSubmit={handleSubmit}>
        <div>name: <input value={newName} onChange={handleNameChange} /></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div><button type="submit" >add</button></div>
      </form>
      <h2>Numbers</h2>
      {filterByName().map((person) => <p key={person.name}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App
