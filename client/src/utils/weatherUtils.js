import icons from '../icons';

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

export const iconFromId = (id) => {
    // See https://openweathermap.org/weather-conditions
    if ((id >= 200 && id < 300) || id === 771) {
        return icons.thunder;
    }
    else if (id === 500 || id === 520 || id === 531 || id === 300 || id === 310) {
        return icons.lightRain;
    }
    else if (id === 501 || id === 521 || id === 301 || id === 311 || id === 313 || id === 321) {
        return icons.rainy;
    }
    else if (id >= 302 && id <= 522) {
        return icons.heavyRain;
    }
    else if (id === 601 || (id >= 611 && id <= 622)) {
        return icons.snowy;
    }
    else if (id === 600) {
        return icons.lightSnow;
    }
    else if (id === 602) {
        return icons.heavySnow;
    }
    else if (id >= 701 && id <= 762) {
        return icons.hazy;
    }
    else if (id === 781) {
        return icons.tornado;
    }
    else if (id === 800) {
        return icons.sunny;
    }
    else {
        // cloudy
        switch (id) {
            case 801:
            case 802:
                return icons.partlyCloudy;
            case 803:
                return icons.mostlyCloudy;
            case 804:
                return icons.overcast;
            default:
                console.log('Unknown ID: ' + id)
                return icons.unknown;
        }
    }
};

export const getWeekdayFromIndex = (index) => {
    var d = new Date();
    var n = (index + d.getDay()) % 7;
    return weekday[n];
}

export const getDateFromIndex = (index) => {
    var d = new Date();
    d.setDate(d.getDate() + index);
    return (d.getMonth() + 1).toString() + "/" + d.getDate().toString();
}