async function weather(city) {
    const res = await fetch(`/api/weather?city=${encodeURIComponent(city)}`)
    const weatherData = await res.json()
    return weatherData
}


let city = document.querySelector('#weather')
let temp = document.querySelector('#temperature').innerHTML
let weatherBox = document.querySelector('.box')
let typeOf = document.querySelector('.typeof')

weatherBox.style.display = 'none'

document.querySelector('#weather').addEventListener('keydown', (e) => {
    if (e.code == "Enter")
        weather(city.value).then((value) => {
            weatherBox.style.display = 'block'
            document.querySelector('#temperature').innerHTML = `${Math.round(value.current.temp_c)}°<span style="font-size: 20px; color: rgb(139, 134, 134);" class="temperature">C</span>`


            // If weather is overcast
            if (value.current.condition.text == "Overcast") {
                document.querySelector('.cloud').innerHTML = `<img src="https://cdn.weatherapi.com/weather/64x64/night/122.png" alt="cloudy" width="62" height="62">`
                typeOf.innerHTML = 'Overcast'
                console.log(value)
            }

            // If weather is Sunny
            else if (value.current.condition.text === "Sunny") {
                document.querySelector('.cloud').innerHTML = `<img src="https://cdn.weatherapi.com/weather/64x64/day/113.png" alt="sunny" width="62" height="62">`
                console.log(value)
                typeOf.innerHTML = 'Sunny'
            }

            // If weather is clear
            else if (value.current.condition.text === "Clear") {
                document.querySelector('.cloud').innerHTML = `<img src="https://cdn.weatherapi.com/weather/64x64/night/113.png" alt="clear" width="62" height="62">`
                console.log(value)
                typeOf.innerHTML = 'Clear'
            }

            // If weather is partly cloudy
            else if (value.current.condition.text === "Partly cloudy") {
                document.querySelector('.cloud').innerHTML = `<img src="https://cdn.weatherapi.com/weather/64x64/day/116.png" alt="partly cloudy" width="62" height="62">`
                console.log(value)
                typeOf.innerHTML = 'Partly Cloudy'
            }
            else if (value.current.condition.text === "Partly Cloudy") { //The API i am using has mistakenly written 'C' in capital
                document.querySelector('.cloud').innerHTML = `<img src="https://cdn.weatherapi.com/weather/64x64/day/116.png" alt="partly cloudy" width="62" height="62">`
                console.log(value)
                typeOf.innerHTML = 'Partly Cloudy'
            }

            // If weather is misty
            else if (value.current.condition.text === "Mist") {
                document.querySelector('.cloud').innerHTML = `<img src="https://cdn.weatherapi.com/weather/64x64/day/143.png" alt="misty" width="62" height="62">`
                console.log(value)
                typeOf.innerHTML = 'Misty'
            }

            // Light rain
            else if (value.current.condition.text === "Light rain shower") {
                document.querySelector('.cloud').innerHTML = `<img src="https://cdn.weatherapi.com/weather/64x64/day/353.png" alt="light rain" width="62" height="62">`
                console.log(value)
                typeOf.innerHTML = 'Light Rain'
            }

            // Moderate rain
            else if (value.current.condition.text === "Moderate rain") {
                document.querySelector('.cloud').innerHTML = `<img src="https://cdn.weatherapi.com/weather/64x64/day/302.png" alt="light rain" width="62" height="62">`
                console.log(value)
                typeOf.innerHTML = 'Moderate Rain'
            }

            // Patchy Light rain with thunder
            else if (value.current.condition.text === "Patchy light rain with thunder") {
                document.querySelector('.cloud').innerHTML = `<img src="https://cdn.weatherapi.com/weather/64x64/day/386.png" alt="light rain" width="62" height="62">`
                console.log(value)
                typeOf.innerHTML = 'Light Rain With Thunder'
            }

            // Light Drizzle
            else if (value.current.condition.text === "Light drizzle") {
                document.querySelector('.cloud').innerHTML = `<img src="https://cdn.weatherapi.com/weather/64x64/day/266.png" alt="light rain" width="62" height="62">`
                console.log(value)
                typeOf.innerHTML = 'Light Drizzle'
            }
        })
}
)


function date() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    return `${hours.toString().padStart(2, '0')}:${minutes} ${ampm}`;

}

setInterval(() => {
    document.querySelector('.time').innerHTML = date()
}, 1000)