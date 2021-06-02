const re = /^[A-Z a-z]+,[ ]?[A-Za-z]{2}$/;

const validateCityState = (cityState) => {
    return re.test(cityState);
};

export default validateCityState;