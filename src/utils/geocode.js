const request = require('request');

const geocode = (address, callback) => {
    const geocodingURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?limit=1&access_token=pk.eyJ1Ijoibm9vcnRvciIsImEiOiJja2o3djVqcGozcWtsMnhwMnhlM2I0eTNtIn0.TifIrtY7CBlKTINwOEJlNA';
    request({ url: geocodingURL, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!')
        } else if (body.features.length === 0) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;