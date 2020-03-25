const request = require('request');

const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoib3BlbnJpb3QiLCJhIjoiY2s4MGs1YnczMDFodjNtcXFxOG1kZHkzdCJ9._r9C_C5bXrSPaK95fhzmiA&limit=1';

    request({ url, json: true }, (error, {body}) => {

        if(error){ 

            callback('Unable to connect to location services', undefined);

        } else if(body.features.length === 0){

           callback("Unable to find the geolocation! Try another search.", undefined);

        } else {

            const longitude = body.features[0].center[0];
            const latitude = body.features[0].center[1];
            const placeName = body.features[0].place_name;
            callback(undefined, { latitude: latitude, longitude: longitude, location: placeName});
    
        }

    })

}

module.exports = geocode;