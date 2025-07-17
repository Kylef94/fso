import { useEffect, useState } from 'react'
import axios from 'axios'
import ContactList from './components/ContactList.jsx'
import FilterForm from './components/FilterForm.jsx'
import PersonForm from './components/PersonForm.jsx'
import ContactService from './services/ContactService.js'

const App = () => {
  const [persons, setPersons] = useState([])
  const [search, setSearch] = useState('')
  
  useEffect(() => {
    ContactService.getAll()
    .then(contacts => {
      setPersons(contacts)
    })
    
  }, [])

  const newContact = (newName, newNumber) => {
    if (persons.find(person => person.name == newName)) {
      alert(`${newName} is already in the phonebook!`)
    }
    else {
      const newContact = {name: newName, 
                          number: newNumber}
      
      ContactService.create(newContact)
      .then(contact => setPersons(persons.concat(contact)))
      
    }
  }

  const removeContact = (contact) => {
    if (window.confirm(`Are you sure you want to delete ${contact.name}`)) {
      ContactService.remove(contact.id)
      setPersons(persons.filter(person => person.id != contact.id))
    }
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm search={search} setSearch={setSearch}/>
      <h3>Add new contact</h3>
      <PersonForm newContact={newContact}/>
      <h2>Numbers</h2>
      <ContactList persons={persons} search={search} removeContact={removeContact}/>
    </div>
  )
}

export default App
