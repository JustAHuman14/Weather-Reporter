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

city.addEventListener('keydown', (e) => {
    if (e.code == "Enter")
        weather(city.value).then((value) => {
            document.querySelector('.feel').innerHTML = `Feels Like ${Math.round(value.current.feelslike_c)}°C`
            document.querySelector('.cloud').innerHTML = `<img src="https:${value.current.condition.icon}" alt="cloudy" width="62" height="62">`
            typeOf.innerHTML = value.current.condition.text
            weatherBox.style.display = 'block'
            document.querySelector('#temperature').innerHTML = `${Math.round(value.current.temp_c)}°<span style="font-size: 20px; color: rgb(139, 134, 134);" class="temperature">C</span>`

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
        })
}
)

let search = document.querySelector('.click')

search.addEventListener('click', () => {
    weather(city.value).then((value) => {
        document.querySelector('.feel').innerHTML = `Feels Like ${Math.round(value.current.feelslike_c)}°C`
        document.querySelector('.cloud').innerHTML = `<img src="https:${value.current.condition.icon}" alt="cloudy" width="62" height="62">`
        typeOf.innerHTML = value.current.condition.text
        weatherBox.style.display = 'block'
        document.querySelector('#temperature').innerHTML = `${Math.round(value.current.temp_c)}°<span style="font-size: 20px; color: rgb(139, 134, 134);" class="temperature">C</span>`

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
    })
})

function date() {
    const now = new Date()
    let hours = now.getHours()
    const minutes = now.getMinutes().toString().padStart(2, '0')
    const ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12 || 12

    return `${hours.toString().padStart(2, '0')}:${minutes} ${ampm}`
}

setInterval(() => {
    document.querySelector('.time').innerHTML = date()
}, 1000)

setInterval(() => {
    let dates = new Date()
    let hour = dates.getHours()
    let minute = dates.getMinutes()
    let time = hour * 60 + minute

    let body = document.body
    if (time >= 300 && time <= 390) {
        body.style.backgroundImage = "url('https://thumbs.dreamstime.com/b/gorgeous-panorama-twilight-sky-cloud-morning-background-image-219446233.jpg')"
    } else if (time > 390 && time <= 540) {
        body.style.backgroundImage = "url('https://thumbs.dreamstime.com/b/early-morning-sky-scene-background-82859739.jpg')"
    } else if (time > 540 && time <= 1020) {
        body.style.backgroundImage = "url('https://wallpaperaccess.com/full/398927.jpg')"
    } else if (time > 1020 && time <= 1050) {
        body.style.backgroundImage = "url('https://th.bing.com/th/id/R.29a46ef58d5d8ac7c8bf28d81402c013?rik=BgDMX7fvWNd%2fXw&riu=http%3a%2f%2faneyeonyouproduction.com%2fuploads%2f3%2f5%2f4%2f3%2f35438268%2fimg2-10-20-4644-45-46-47-48-49-50-balancer_orig.jpg&ehk=saWx%2bQ%2fbwJQBwLc12z5dx9PpkxawerNXoTg8xj6olXg%3d&risl=&pid=ImgRaw&r=0')"
    } else if (time > 1050 && time <= 1080) {
        body.style.backgroundImage = "url('https://img.freepik.com/free-photo/sunset-sky_74190-4493.jpg?semt=ais_hybrid&w=740')"
    }
}, 1000);