const request = require('request')

 

const apiKey = "421b4b42430d7b80e3864e8ef259692b";

const forecast = (latitude, longitude, callback) => {
	
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
	console.log("URL ",url);
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.name+ ' It is currently ' + body.main.temp + ' degress out. There is a ' + body.main.humidity + ' of humidity')
        }
    })
}

module.exports = forecast