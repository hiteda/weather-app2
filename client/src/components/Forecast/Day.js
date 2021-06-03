import React from 'react';
import './Day.css';
import { getWeekdayFromIndex, getDateFromIndex, iconFromId } from '../../utils/weatherUtils';

const Day = ({data, index}) => {
    const weather = data.weather[0];
    return ( 
        <div className="flow-text day" >
            <h6 className="truncate weekday">{getWeekdayFromIndex(index)}</h6>
            <h6>({getDateFromIndex(index)})</h6>
            <img className="responsive-img" src={iconFromId(weather.id)} alt={weather.description} />
            <h6>{weather.description}</h6>
            <h6>High: {data.temp.max}</h6>
            <h6>Low: {data.temp.min}</h6>
        </div>
    );
};

export default Day;