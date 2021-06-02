import axios from 'axios';

const getCity = async (cityState) => {
    const parsed = cityState.split(',');
    if (parsed.length !== 2) {
        return null;
    }

    const response = await axios.get(`/api/geocode?city=${parsed[0]}&state=${parsed[1]}`).catch(console.log);
    if (response.status === 200) {
        return response.data;
    }
    return null;
};

export default getCity;