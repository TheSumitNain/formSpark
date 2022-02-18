import React, { useState, useEffect } from 'react';
import Weather from './Weather';

const Temperature = () => {
    const [searchValue, setSearchValue] = useState("narwana");
    const [tempInfo, setTempInfo] = useState({});



    const getWeatherInfo = async () => {
        try {
            let api = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=f5438d5fbd64d400f92db90c211e8a17`;
            const res = await fetch(api);
            const data = await res.json();

            const { temp, pressure, humidity } = data.main;
            const { main: weathermood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            const myNewWeatherInfo = {
                temp,
                pressure,
                humidity,
                weathermood,
                name,
                speed,
                country,
                sunset
            }
            setTempInfo(myNewWeatherInfo);
            console.log(tempInfo);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getWeatherInfo();
    }, [searchValue]);
    return (
        <>
            <div className='main_div'>
                <div className='searchbar'>
                    <input type="text" placeholder="Search City..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)} />
                    <button onClick={getWeatherInfo}>Search</button>
                </div>
                <Weather tempInfo={tempInfo} />
            </div>
        </>
    )
}

export default Temperature;