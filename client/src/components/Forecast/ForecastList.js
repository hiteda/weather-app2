import React from 'react';

const ForecastList = ({forecasts}) => {

    return (
        <div className="row">
            {forecasts.map(forecast => {
                return (
                    <div className="col s4" key={forecast.name}>{forecast.name}</div>
                );
            })}
        </div>
    );
};

export default ForecastList;