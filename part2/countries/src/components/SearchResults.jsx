import { useEffect, useState } from 'react'
import CountrySummary from './CountrySummary'
import Weather from './Weather'

const SearchResults = ({countryData, search}) => {
    const [countryFilter, setCountryFilter] = useState([])

    useEffect(() => {
    updateCountryFilter()
    }, [search])

  const updateCountryFilter = () => {
    if (!search) {
        setCountryFilter([])
    } else{
     const results = countryData.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))
    setCountryFilter(results)
    }
  }

  const selectCountry = (name) => {
    setCountryFilter(countryData.filter(country => country.name === name))
  }

    if (!countryFilter) {
        return null
    }   
    
    else if (countryFilter.length > 10) {
        return <p>Too many matches, please specify another filter</p>
    }
    else if (countryFilter.length === 1) {
        const country = countryFilter[0]
        return <CountrySummary country={country} />
        }
    else {
        return (
        <div>
            {countryFilter.map((country) => {
                return (
                <p key={country.name}> 
                {country.name}
                <button onClick={() => selectCountry(country.name)}>Show</button>
                </p>)
            })}
        </div>
        )
 
    }
    
}

export default SearchResults