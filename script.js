const urlBase = `https://api.openweathermap.org/data/2.5/weather`

const API_KEY = `APY_KEY`
const diffKelvin = 273.15

//escuchamos el llamado del boton

document.getElementById('searchButton').addEventListener('click', () =>{

    const city = document.getElementById('cityInput').value;
    if(city){
        fetchWeather(city)

        
    }else{
        alert('Ingrese una ciudad valida')
    }

    
})



function fetchWeather (city){
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
    .then(data => data.json())
    .then(data => showWeatherData(data))
    
}

function showWeatherData(data){
    const divResponseData = document.getElementById('responseDate')

    divResponseData.innerHTML = ''

    const cityName = data.name  
    const countryName = data.sys.country
    const temp = data.main.temp
    const humidity = data.main.humidity
    const description = data.weather[0].description
    const icon = data.weather[0].icon

    const cityInfo = document.createElement('h2')
    cityInfo.textContent = `${cityName}, ${countryName}`

    const tempInfo = document.createElement('h3')
    tempInfo.textContent = `${Math.floor(temp - diffKelvin)}°C`

    const humidityInfo = document.createElement('p')
    humidityInfo.textContent = (`Humedad: ${humidity}%`)

    const icoInfo = document.createElement('img')
    icoInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`

    const descriptionInfo = document.createElement('p')
    descriptionInfo.textContent = `${description}`

    divResponseData.appendChild(cityInfo)
    divResponseData.appendChild(tempInfo)
    divResponseData.appendChild(humidityInfo)
    divResponseData.appendChild(icoInfo)
    divResponseData.appendChild(descriptionInfo)

    



}

