import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import SearchResults from './components/SearchResults'


function App() {
  const [search , setSearch] = useState('')
  const [countryData, setCountryData] = useState([])
  

  const allCountriesUrl = "https://studies.cs.helsinki.fi/restcountries/api/all"

  useEffect(() => {
      getCountryData()
  }, [])

  const getCountryData = () => {
    axios.get(allCountriesUrl)
      .then(response => response.data)
      .then(data => {
          console.log(data[0])
          const countries = data.map(country => {
            const info = {
            name: country.name.common,
            area: country.area,
            capital: country.capital,
            languages: country.languages,
            flag: country.flags,
            latlng: country.capitalInfo.latlng
            }
            return info
          })
          setCountryData(countries)
      })
      .catch(error => console.log(error))
  }
  const onSearchChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      find countries <input type="text" value={search} onChange={onSearchChange} />
      <SearchResults countryData={countryData} search={search}/>
    </div>
  )
}

export default App
