import React from 'react'
import axios from 'axios'

function Weather() {

    const [city, setCity] = React.useState('');
    const [weatherData, setWeatherData] = React.useState(null);

    const handleCityChange = (e) => {
        setCity(e.target.value)
    }
    
    const fetchWeather = async () => {
        if (!city.trim()) {
            alert('Please enter a city name');
            return;
        }

        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=89088c8bb01e8b177993a6355d2b8b01`);
            setWeatherData(response);
            console.log(response.data); // In Browser Console
        }
        catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    const handleClick = () => {
        fetchWeather();
    }

    
  return (
    <div className='weather-container'>
        <input className='inputForm' type="text" placeholder='Enter City Name' value={city} onChange={handleCityChange}/>
        <button className='btn' onClick={handleClick}>Get Weather</button>
        {weatherData && <>
        <div className='weather-info'>
            <h3>{weatherData.data.name}</h3>
            <p>Temperature is {weatherData.data.main.temp}</p>
            <p>Temperature is {weatherData.data.weather[0].description}</p>
        </div>
        </>}
    </div>
  )
}

export default Weather
