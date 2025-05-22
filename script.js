async function weather(city) {
    let a = await fetch(`https://api.weatherapi.com/v1/current.json?key=92096355e93b4b71b2092332252105&q=${city}`)
    let b = await a.json()
    return b
}

// weather('New York').then((value)=>{
//     console.log(`${value.current.temp_c}°C`)
// })

let city = document.querySelector('#weather')

document.querySelector('#weather').addEventListener('keydown', (e) => {
    if (e.code == "Enter") {
        weather(city.value).then((value) => {
            console.log(value.location)
        })
    }
})

function date() {
    let a = new Date()
    b = a.getHours() % 12 || 12
    c = a.getMinutes()

     if (c < 10) {
        c = `0${c}`
    }
     if (b < 10) {
        b = `0${b}`
    }
    if (b < 12) {
        return `${b}:${c} AM`
    } else {
        return `${b}:${c} PM`
    }

   
}

setInterval(()=>{
    document.querySelector('.time').innerHTML = date()
}, 1000)

//°C\nRegion = ${value.location.region}\nCountry = ${value.location.country}}`