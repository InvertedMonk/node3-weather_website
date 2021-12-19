const request = require('request')



const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=6f522f29d220f991c22d6fc028817b9f&query=" + latitude + "," + longitude
    console.log(url)
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,{
                location: body.location.region + ", " + body.location.country,
                temperature: body.current.temperature,
                feelslike: body.current.feelslike,
                forecast: body.current.weather_descriptions[0],
                precipitation: body.current.precip + " %"
            })
        }
    })
}

module.exports = forecast
