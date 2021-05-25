const { query } = require('express');
const fetch = require('node-fetch');
const keys = require('../config/keys');

module.exports = app => {
    app.get('/api/weather', async ({ query }, res) => {
        if (!query.lat || !query.lon) {
            res.status(400);
            res.send('Missing lat and/or lon');
            return;
        }

        const weatherApiUrl = //'https://cors-anywhere.herokuapp.com/'
                                'https://api.openweathermap.org/data/2.5/onecall?'
                                + 'lat=' + query.lat
                                + '&lon=' + query.lon
                                + '&exclude=current,hourly,minutely&units=imperial'
                                + '&appid=' + keys.OWMAppId;

        const response = await fetch(weatherApiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch(console.log);

        if (!response.ok) {
            res.status(500);
            res.send('Server request failed');
            return;
        }
        
        const data = await response.json().catch(console.log);
        const weather = getWeatherFromData(data.daily);
        res.send(weather);
    });
};

const getWeatherFromData = data => {
    return data;
};