const urlBase = `https://api.openweathermap.org/data/2.5/weather`

const urlPronosticoExtendido = `https://pro.openweathermap.org/data/2.5/forecast`

const API_KEY = `c89ac3bbab9cb1fdb1adf19788be32fe`
const diffKelvin = 273.15

//escuchamos el llamado del boton

document.getElementById('searchButton').addEventListener('click', () => {

    const city = document.getElementById('cityInput').value;
    if (city) {
        fetchWeather(city)
        fetchPronostico1(city)
        fetchPronostico2(city)
        fetchPronostico3(city)
        
        



    } else {
        alert('Ingrese una ciudad valida')
    }


})



function fetchWeather(city) {
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
        .then(data => data.json())
        .then(data => showWeatherData(data))


}


function fetchPronostico1(city) {
    fetch(`${urlPronosticoExtendido}?q=${city}&appid=${API_KEY}&lang=es`)
        .then(data => data.json())
        .then(data => pronosticoData1(data))

}
function fetchPronostico2(city) {
    fetch(`${urlPronosticoExtendido}?q=${city}&appid=${API_KEY}&lang=es`)
        .then(data => data.json())
        .then(data => pronosticoData2(data))

}
function fetchPronostico3(city) {
    fetch(`${urlPronosticoExtendido}?q=${city}&appid=${API_KEY}&lang=es`)
        .then(data => data.json())
        .then(data => pronosticoData3(data))

}

function showWeatherData(data) {
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
    
    const titulo = 'Pronóstico Extendido'
    const infoTitulo = document.createElement('h2')
    infoTitulo.textContent = titulo
    divResponseData.appendChild(infoTitulo)

    
}

function pronosticoData1(data) {
    
    const pronosticoData = document.getElementById('pronosticoDate1')
    
    
    pronosticoData.innerHTML = ``
    
    //pronostico día 1
    
    const fecha = data.list[6].dt_txt
    const fechaModificada = fecha.slice(-19,-9)
    
    const temMinDia1 = data.list[3].main.temp_min
    const temMaxDia1 = data.list[6].main.temp_max
    const iconDia1 = data.list[6].weather.icon
    
    const icoInfoDia1 = document.createElement('img')
    icoInfoDia1.src = `https://openweathermap.org/img/wn/${iconDia1}@2x.png`


    const fechaInfo = document.createElement('p')
    fechaInfo.textContent = `${fechaModificada}`


    const infoDia1 = document.createElement('p')
    infoDia1.textContent = `T. Max:${Math.floor(temMinDia1 - diffKelvin)} T.Min: ${Math.floor(temMaxDia1 - diffKelvin)}`


    pronosticoData.appendChild(fechaInfo)
    pronosticoData.appendChild(infoDia1)
    pronosticoData.appendChild(icoInfoDia1)




}

//dia 2
function pronosticoData2(data) {
    
    const pronosticoData = document.getElementById('pronosticoDate2')
    
    
    pronosticoData.innerHTML = ``
    
    //pronostico día 2
    
    const fecha = data.list[14].dt_txt
    const fechaModificada = fecha.slice(-19,-9)
    
    const temMinDia2 = data.list[11].main.temp_min
    const temMaxDia2 = data.list[14].main.temp_max
    const iconDia2 = data.list[14].weather.icon
    
    const icoInfoDia2 = document.createElement('img')
    icoInfoDia2.src = `https://openweathermap.org/img/wn/${iconDia2}@2x.png`


    const fechaInfo = document.createElement('p')
    fechaInfo.textContent = `${fechaModificada}`


    const infoDia2 = document.createElement('p')
    infoDia2.textContent = `T. Max:${Math.floor(temMinDia2 - diffKelvin)} T.Min: ${Math.floor(temMaxDia2 - diffKelvin)}`


    pronosticoData.appendChild(fechaInfo)
    pronosticoData.appendChild(infoDia2)
    pronosticoData.appendChild(icoInfoDia2)




}

//dia 3
function pronosticoData3(data) {
    
    const pronosticoData = document.getElementById('pronosticoDate3')
    
    
    pronosticoData.innerHTML = ``
    
    //pronostico día 3
    
    const fecha = data.list[22].dt_txt
    const fechaModificada = fecha.slice(-19,-9)
    
    const temMinDia3 = data.list[19].main.temp_min
    const temMaxDia3 = data.list[22].main.temp_max
    const iconDia3 = data.list[22].weather.icon
    
    const icoInfoDia3 = document.createElement('img')
    icoInfoDia3.src = `https://openweathermap.org/img/wn/${iconDia3}@2x.png`


    const fechaInfo = document.createElement('p')
    fechaInfo.textContent = `${fechaModificada}`


    const infoDia3 = document.createElement('p')
    infoDia3.textContent = `T. Max:${Math.floor(temMinDia3 - diffKelvin)} T.Min: ${Math.floor(temMaxDia3 - diffKelvin)}`


    pronosticoData.appendChild(fechaInfo)
    pronosticoData.appendChild(infoDia3)
    pronosticoData.appendChild(icoInfoDia3)




}


