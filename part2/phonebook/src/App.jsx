import { useState } from 'react'
import ContactList from './components/ContactList.jsx'
import FilterForm from './components/FilterForm.jsx'
import PersonForm from './components/PersonForm.jsx'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  
  const [search, setSearch] = useState('')
    

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm search={search} setSearch={setSearch}/>
      <h3>Add new contact</h3>
      <PersonForm persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
      <ContactList persons={persons} search={search}/>
    </div>
  )
}

export default App
