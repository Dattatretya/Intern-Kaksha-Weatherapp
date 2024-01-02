

import React, { useEffect, useState } from 'react'
import { FaSearchLocation } from "react-icons/fa"
const Weather = () => {


    const [state, setState] = useState("")
    const [getState, setGetState] = useState("")
    const [data, setData] = useState ({})


   const API_KEY= "70b1a04435e3173a3d8a2cb2d841a049"
   const URL = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${API_KEY}&units=metric`


    useEffect(()=>{
        const fetchData = async() => { 
       const response =await fetch(URL)
       const jsonres = await response.json();

       setData(jsonres)
       console.log(jsonres)
    }

    fetchData();

    }, [URL])


    const inputHandler = (e) => {
        setGetState(e.target.value)
    }

    const searchHandler = () => {
        setState(getState)
    }

  return (
    <div className="gradient">
        <h1>Weather App</h1>

        <div className='search'>
        <input type='search' placeholder='search for your place here'
        onChange={inputHandler}
        className='searchbar'
        />

        <FaSearchLocation className='search-icon'
        onClick={searchHandler}
        />
        </div>

        {/* {data.main.temp > 30 ? } */}

        { data.main ? (
            <>
            <div className='weather-info'>
            <h1 className='displaycity'>{state}</h1>

            <h2>Temperature: {data.main.temp} °C</h2>

            <h2>Feels Like: {data.main.feels_like} °C </h2>

            <img id='image' src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='weather'></img>

            <h3>{data.weather[0].main}</h3>

            <h3>Country : {data.sys.country}</h3>

            <h4>Latitude: {data.coord.lat} </h4>
            <h4>Longitude: {data.coord.lon} </h4>

            <h3 className='weather-desc'>Weather Descripton: {data.weather[0].description}</h3>

            <h3>Humidity: {data.main.humidity}</h3>
            </div>
            </>
            ):
            (    
            <p>Please Enter a Valid Place Name and click on the search icon</p>
            )}

    </div>
  )
}

export default Weather