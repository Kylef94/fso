import Weather from './Weather'
const CountrySummary = ({country}) => {
    const languages = Object.values(country.languages)

    //console.log("language list:", languages)
    return ( 
                <div>
                    <h3 className="name">{country.name}</h3>
                    <p>Capital {country.capital}</p>
                    <p>Area {country.area}</p>
                    <h3>Languages</h3>
                    <ul>
                        {languages.map(lang => <li key={lang}>{lang}</li>)}
                    </ul>
                    <img src={country.flag.png} alt={country.flag.alt} />
                    <Weather location={country.latlng} />
                </div>
            )
}

export default CountrySummary