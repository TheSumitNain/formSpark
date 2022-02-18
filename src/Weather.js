import React, { useState, useEffect } from 'react';

const Weather = ({ tempInfo }) => {
    const [weatherState, setWeatherState] = useState("");
    const {
        temp,
        pressure,
        humidity,
        weathermood,
        name,
        country,
        speed,
        sunset
    } = tempInfo;

    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds":
                    setWeatherState("wi-day-cloudy");
                    break;
                case "Haze":
                    setWeatherState("wi-fog");
                    break;
                case "Clear":
                    setWeatherState("wi-day-sunny");
                    break;
                case "Mist":
                    setWeatherState("wi-dust");
                    break;
                case "Snow":
                    setWeatherState("wi-snow");
                    break;

                default: setWeatherState("wi-day-sunny");
                    break;
            }
        }
    }, [weathermood]);

    let sec = sunset;
    let date = new Date(sec * 1000);
    let tempstr = `${date.getHours()}:${date.getMinutes()}`;
    return (
        <>
            <div className='card'>
                <div className='weather_icon'>
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className="weather_detail">
                    <div className='weather_postion'>
                        <p className='temp'>{temp}°C</p>
                        <div className='place'>
                            <p className='clouds'>{weathermood}</p>
                            <p> {name}, <span>{country}</span> </p>
                        </div>

                    </div>
                    <div className='weather_time'>
                        <p>{new Date().toLocaleString()} </p>
                    </div>
                </div>
                <div className='weather_data'>
                    <div className='weather_data_box'>
                        <i className="wi wi-day-sunny"></i>
                        <div className='xyz'>
                            <p>{tempstr} PM </p>
                            <p>sunset</p>
                        </div>
                    </div>
                    <div className='weather_data_box'>
                        <i className="wi wi-day-sunny"></i>
                        <div className='xyz'>
                            <p>{speed} </p>
                            <p>speed</p>
                        </div>
                    </div>
                    <div className='weather_data_box'>
                        <i className="wi wi-day-sunny"></i>
                        <div className='xyz'>
                            <p>{humidity} </p>
                            <p>humidity</p>
                        </div>
                    </div>
                    <div className='weather_data_box'>
                        <i className="wi wi-day-sunny"></i>
                        <div className='xyz'>
                            <p>{pressure} </p>
                            <p>pressure</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Weather;