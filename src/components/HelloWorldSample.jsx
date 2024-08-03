import React, { createElement, useState } from "react";

const api = {
    key: "69b0c482eebc89a44a87223bf24dbf82",
    base: "https://api.openweathermap.org/data/2.5/"
};

export function HelloWorldSample({ sampleText }) {
    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});

    const searchPressed = () => {
        fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
            .then((res) => res.json())
            .then((result) => {
                setWeather(result);
            });
    }

    return (
        <>
            <div className="widget-hello-world">Weather widget welcomes you, {sampleText}</div>
            <div>
                <input type="text" placeholder="Search here..." onChange={e => setSearch(e.target.value)} />
                <button onClick={searchPressed}>Search</button>
            </div>

            {weather.name && (
                <div>
                    <p>Location: {weather.name}</p>
                    {weather.main && <p>Temperature: {weather.main.temp} °C</p>}
                    {weather.weather && weather.weather.length > 0 && (
                        <div>
                            <p>Weather: {weather.weather[0].main}</p>
                            <p>Description: {weather.weather[0].description}</p>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}
