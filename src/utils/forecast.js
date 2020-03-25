const request = require('request');

const forecast = (longitude, latitude, callback) => {

    const url = 'https://api.darksky.net/forecast/27703b85bf9b669e224d6890fa04a128/'+longitude+','+latitude;

    request({ url, json: true }, (error, {body}) => {

        if(error) {

            callback("Unable to connect to weather services", undefined);

        } else if(body.error){

           callback("Unable to find location!", undefined);

        } else {

            data = body.currently;
            celsius = (data.temperature - 32) * 5/9;
            callback(undefined, "It is currently " + celsius.toPrecision(3) + "ºC with "+ data.precipProbability.toPrecision(1)*100 + "% chance of rain.");
       
        }
    })

}

module.exports = forecast;