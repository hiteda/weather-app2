const fetch = require('node-fetch');
const keys = require('../config/keys');


module.exports = app => {
    app.get('/api/geocode', async ({ query }, res) => {
        if (!query.city || !query.state) {
            res.send("Missing parameter");
            return;
        }
        console.log(process.env.NODE_ENV);

        const geocodeUrl = //'https://cors-anywhere.herokuapp.com/'
                            'https://api.opencagedata.com/geocode/v1/json?q='
                            + query.city
                            + '%2C%20'
                            + query.state
                            + '&key=' + keys.openCageApiKey
                            + '&language=en&pretty=1&no_annotations=1';
        console.log(geocodeUrl);
        const response = await fetch(geocodeUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch(console.log);

        const data = await response.json().catch(console.log);
        const coords = getCoordinatesFromData(data);
        console.log(coords);
        res.send(coords);
    });
};

const getCoordinatesFromData = (data) => {
    const bounds = data.results[0].bounds;
    const latf = (parseFloat(bounds.northeast.lat) + parseFloat(bounds.southwest.lat)) / 2.0;
    const lngf = (parseFloat(bounds.northeast.lng) + parseFloat(bounds.southwest.lng)) / 2.0;
    return {
        lat: latf,
        lon: lngf
    };
};