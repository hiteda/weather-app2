
const locationString = (location) => {
    if (!location) {
        return '';
    }
    const parsed = location.split(',');
    const city = toTitleCase(parsed[0]);

    let state = '';
    if (parsed.length > 1) {
        state = parsed[1].trim();
        if (state.length === 2) {
            state = state.toUpperCase();
        }
        else {
            state = toTitleCase(state);
        }
    }
    return city + ', ' + state;
};

const toTitleCase = str => {
    return str.toLowerCase().split(' ').map(word => {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
};

export default locationString;