const request = require('request')
const access_token = "pk.eyJ1IjoiZGV2LXZpdmVrIiwiYSI6ImNrd2FsNGJsYzEyeDYzMHFtcjlwMWRlY3QifQ.jxacQLN-T-yIkw91WbOhig"

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=' + access_token
    //console.log(url)
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features === undefined) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode