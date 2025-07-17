import { useState } from 'react'

const PersonForm = ({persons, setPersons}) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
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

  return (<form onSubmit={handleSubmit}>
        <div>name: <input value={newName} onChange={handleNameChange} /></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div><button type="submit" >add</button></div>
      </form>)
}

export default PersonForm