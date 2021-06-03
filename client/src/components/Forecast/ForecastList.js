import React from 'react';
import Forecast from './Forecast';

const ForecastList = ({forecasts}) => {

    return (
        <div>
            {forecasts.map(forecast => {
                return (
                    <Forecast key={forecast.name} name={forecast.name} coords={forecast.coords} />
                );
            })}
        </div>
    );
};

export default ForecastList;