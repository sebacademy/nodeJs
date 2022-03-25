const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=28446c3802997d3f2c580431c26d0e9e&query=37.8267,-122.4233';
request({url: url, json:true}, (error, response)=>{
	//console.log(response.body.current);
});

const url_Mapbox='https://api.mapbox.com/geocoding/v5/mapbox.places/paris.json?access_token=pk.eyJ1Ijoic2JyYW5jYSIsImEiOiJjbDE0MTZ0bjYwMnNyM2Rydm9rbXF1cTUzIn0.1l3oVeiwo7AqcvqHXn6wqg';
request({url: url_Mapbox, json:true}, (error, response)=>{
	if(error){
		//console.log("Unable to connect");
	}else{
		//console.log(response.body);
	}
});


const geocode = (address, callback)=>{
	const url_geoCode = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1Ijoic2JyYW5jYSIsImEiOiJjbDE0MTZ0bjYwMnNyM2Rydm9rbXF1cTUzIn0.1l3oVeiwo7AqcvqHXn6wqg'
	request({url: url_geoCode}, (error, response)=>{
		console.log(response);
		if(error){
			callback('Error',undefined);
		}else if(response.body.features.length === 0){
			callback('Error',undefined);			
		}else{
			callback(undefined, {
				latitude: 0,
				longitude: 0
			})
		}
	})
};

geocode('paris', (error, data)=>{
	if(error){
		console.log(error)
	}else{
		console.log(data);
	}
});