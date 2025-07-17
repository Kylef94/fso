import { useEffect, useState } from 'react'
import axios from 'axios'
import ContactList from './components/ContactList.jsx'
import FilterForm from './components/FilterForm.jsx'
import PersonForm from './components/PersonForm.jsx'



const App = () => {
  const [persons, setPersons] = useState([])
  const [search, setSearch] = useState('')
  
  useEffect(() => {
    axios.get("http://localhost:3001/persons")
    .then(response => {
      setPersons(response.data)
    })
    
  }, [])
  

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
