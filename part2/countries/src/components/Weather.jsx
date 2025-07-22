import { useEffect, useState } from 'react'
import axios from 'axios'

const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?"
const api_key = import.meta.env.VITE_WEATHER_KEY

const Weather = ({location}) => {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        const lat = location[0]
        const long = location[1]
        const apiUrl = `${weatherUrl}lat=${lat}&lon=${long}&units=metric&appid=${api_key}`
        axios.get(apiUrl)
        .then(response => response.data)
        .then(data => {
            const result = {
                name: data.name,
                main: data.weather[0].main,
                icon: data.weather[0].icon,
                temp: data.main.temp,
                wind: data.wind.speed
            }
            setWeather(result)
        })
        .catch(e => console.log(e))
    }, [])

    if (!weather) {return null}
    else {
        const imgurl = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`
        return <div id="weather">
            <h3>Weather in {weather.name}</h3>
            <p> Temperature {weather.temp} Celsius </p>
            <img src={imgurl} alt="weather icon" />
            <p> Wind {weather.wind} m/s </p>
            </div>
    }
}

export default Weather