const express = require('express');
const path = require('path');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();
const publicDirectoryPath = path.join(__dirname, './public'); 
const viewPath = path.join(__dirname, './templates/views'); 
const partialPath = path.join(__dirname, './templates/partials'); 

//Setup handlebars engine and views
app.set('view engine', 'hbs');
app.set('views',viewPath); 
hbs.registerPartials(partialPath);


app.use(express.static(publicDirectoryPath));


app.get('',(req,res)=>{
	res.render('index',{
		title: 'Weather',
		name: 'Sebastian'
	});
});

app.get('/help', (req, res)=>{
	res.send('Help');
});


app.get('/weather', (req, res) => {

    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    });
});

app.get('*', (req,res)=>{
	res.render('404',{
		errorMessage: "Not found",
		name: 'Sebastian'
	});
})

app.listen(3000, ()=>{
console.log("Done");
});