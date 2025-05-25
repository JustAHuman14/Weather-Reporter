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

function weatherUpdate() {
    weather(city.value).then((value) => {
        if (!city.value) {
            weatherBox.style.display = 'none'
            alert('Enter city or region name!')
        } else {
            weatherBox.style.display = 'block'
            document.querySelector('.feel').innerHTML = `Feels Like ${Math.round(value.current.feelslike_c)}°C`
            document.querySelector('.cloud').innerHTML = `<img src="https:${value.current.condition.icon}" alt="cloudy" width="62" height="62">`
            typeOf.innerHTML = value.current.condition.text
            document.querySelector('#temperature').innerHTML = `${Math.round(value.current.temp_c)}°<span style="font-size: 20px; color: rgb(139, 134, 134);" class="temperature">C</span>`
            document.getElementById('name').innerHTML = `${value.location.name}, ${value.location.country}` 
            document.querySelector('.dew').innerHTML = `${value.current.dewpoint_c}°C`
            document.querySelector('.pressure').innerHTML = `↓${value.current.pressure_mb} mb`
            document.querySelector('.clouds').innerHTML = `${value.current.cloud}%`
            document.querySelector('.visible').innerHTML = `${value.current.vis_km} km`

            let uv = `${Math.round(value.current.uv)}`
            if (uv >= 0 && uv <= 2) {
                uv = `${Math.round(value.current.uv)} Low`
            } else if (uv >= 3 && uv <= 5) {
                uv = `${Math.round(value.current.uv)} Moderate`
            } else if (uv >= 6 && uv <= 7) {
                uv = `${Math.round(value.current.uv)} High`
            } else if (uv >= 8 && uv <= 10) {
                uv = `${Math.round(value.current.uv)} Very High`
            } else if (uv >= 11) {
                uv = `${Math.round(value.current.uv)} Extreme`
            }
            document.querySelector('.uv').innerHTML = uv
            let win = `${Math.round(value.current.wind_kph)}`

            document.querySelector('.win').innerHTML = `${win} kmph`

            let gust = `${Math.round(value.current.gust_kph)}`

            document.querySelector('.gust').innerHTML = `${gust} kmph`

            let humid = value.current.humidity

            document.querySelector('.humid').innerHTML = `${humid}%`

            // If weather is overcast
            if (value.current.condition.text == "Overcast") {
                typeOf.innerHTML = 'Overcast'
            }
            // If weather is Sunny
            else if (value.current.condition.text === "Sunny") {
                typeOf.innerHTML = 'Sunny'
            }
            // If weather is clear
            else if (value.current.condition.text === "Clear") {
                typeOf.innerHTML = 'Clear'
            }
            // If weather is partly cloudy
            else if (value.current.condition.text === "Partly cloudy") {
                typeOf.innerHTML = 'Partly Cloudy'
            }
            else if (value.current.condition.text === "Partly Cloudy") { //The API i am using has mistakenly written 'C' in capital
                typeOf.innerHTML = 'Partly Cloudy'
            }
            // If weather is misty
            else if (value.current.condition.text === "Mist") {
                typeOf.innerHTML = 'Misty'
            }
            // Light rain
            else if (value.current.condition.text === "Light rain shower") {
                typeOf.innerHTML = 'Light Rain'
            }
            // Moderate rain
            else if (value.current.condition.text === "Moderate rain") {
                typeOf.innerHTML = 'Moderate Rain'
            }
            // Patchy Light rain with thunder
            else if (value.current.condition.text === "Patchy light rain with thunder") {
                typeOf.innerHTML = 'Light Rain With Thunder'
            }
            // Light Drizzle
            else if (value.current.condition.text === "Light drizzle") {
                typeOf.innerHTML = 'Light Drizzle'
            }
            // Patch rain nearby
            else if (value.current.condition.text === "Patchy rain nearby") {
                typeOf.innerHTML = 'Patchy Rain Nearby'
            }
        }
    })
}

city.addEventListener('keydown', (e) => {
    if (e.code == "Enter") {
        weatherUpdate()
    }
})
document.querySelector('#search').addEventListener('click', () => {
    weatherUpdate()
})

function date() {
    let now = new Date()
    let hours = now.getHours().toString().padStart(2, '0')
    let minutes = now.getMinutes().toString().padStart(2, '0')
    let ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12 || 12

    return `${hours}:${minutes} ${ampm}`
}

setInterval(() => {
    document.querySelector('.time').innerHTML = date()
}, 1000)