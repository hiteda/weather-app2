import axios from 'axios';

const getForecast = async (coords) => {
    if (coords === null) {
        return [];
    }

    const response = await axios.get(`/api/weather?lat=${coords.lat}&lon=${coords.lon}`).catch(console.log);
    if (response.status === 200) {
        return response.data;
    }
    return [];
};

export default getForecast;