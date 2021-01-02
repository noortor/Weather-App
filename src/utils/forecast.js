const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7d85524dc9edd8eecaac9a7ba517dda3&query=' + latitude + ',' + longitude + '&units=f';
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to forecast service');
        } else if (body.error) {
            callback('Unable to get forecast');
        } else {
            const current = body.current;
            const temperature = current.temperature;
            const feelsLike = current.feelslike;
            callback(error, current.weather_descriptions[0] + ". It is currently " + temperature + " degrees out. It feels like " + feelsLike + " degrees.")
        }
    })
}

module.exports = forecast;