import React, { createElement, useState } from "react";
import "../ui/UnknownWidget.css";

const api = {
    key: "69b0c482eebc89a44a87223bf24dbf82",
    base: "https://api.openweathermap.org/data/2.5/"
};

export function HelloWorldSample({ sampleText }) {
    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});

    const searchPressed = () => {
        fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
            });
    };

    return (
        <>
            <div className="widget-wrapper">
            <h2>{sampleText}</h2>
            <div>
                <input
                    className="myInput"
                    type="text"
                    placeholder="Search here..."
                    onChange={e => setSearch(e.target.value)}
                />
                <button className="mysearchbtn" onClick={searchPressed}>
                    Search
                </button>
            </div>

            {weather.name && (
                <div className="weather-info">
                    <p className="myptag">Location: {weather.name}</p>
                    {weather.main && <p className="myptag">Temperature: {weather.main.temp} °C</p>}
                    {weather.weather && weather.weather.length > 0 && (
                        <div>
                            <p className="myptag">Weather: {weather.weather[0].main}</p>
                            <p className="myptag">Description: {weather.weather[0].description}</p>
                        </div>
                    )}
                </div>
            )}
            </div>
        </>
    );
}
