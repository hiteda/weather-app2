import React, { useState, useEffect } from 'react';
import getForecast from '../../utils/getForecast';
import Day from './Day';
import './Forecast.css';

const Forecast = ({ name, coords }) => {
    const [forecast, setForecast] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await getForecast(coords);

            setForecast(response);
        };
        fetchData();
    }, []);

    return (
        <div>
            <div className="center-align">
                <h4>{name}</h4>
            </div>
            <div className="App-row centered">
                {forecast.length > 0 && forecast.map((data, index) => {
                    return (
                        <Day data={data} index={index} key={index} />
                    );
                })}
            </div>
        </div>
    );
};

export default Forecast;