# Weather Comparison App

### See the app deployed on [Heroku](https://comp-weather.herokuapp.com/)

The Weather Comparison App lets you compare the 7-day forecast of multiple cities using the [OpenWeatherMap API](https://openweathermap.org/api) and [OpenCageData](https://opencagedata.com/)'s geocoding API. The Express backend is to allow my front end to be ignorant of the APIs being used for geocoding and weather, so I can switch them out more easily if I would like. It also keeps the API keys on the server side, and allows me to use environment variables in my Heroku deployment and keep them secret.

## Requirements

This is a React application, so React and node.js are required to run it. You will also need API keys for the [OpenWeatherMap API](https://openweathermap.org/api) and for [OpenCageData's geocoding API](https://opencagedata.com/). Once you have your API keys, add them to 'src/config/dev.js' with the following format:
```
// dev.js

module.exports = {
    OWMAppId: <your-id-string>,
    openCageApiKey: <your-id-string>
};
```

## Running the app

In the project directory, first run:

### `npm install`

to install the necessary packages, then `cd` to the `client` directory and again run:

### `npm install`

Finally, to run the app, return to the top level directory and run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
