import React from 'react';

const ForecastList = ({forecasts}) => {

    return (
        <div className="row">
            {forecasts.map(forecast => {
                return (
                    <div className="col s4" key={forecast}>{forecast}</div>
                );
            })}
        </div>
    );
};

export default ForecastList;