const express = require('express')
const app = express()
const port = 3000
require('dotenv').config()

app.use(express.static('public'))

app.get('/api/weather', async (req, res) => {
    const city = req.query.city;
    const apiKey = process.env.API_KEY;
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city)}`;

    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})