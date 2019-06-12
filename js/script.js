const coords = {
    lon: '18.1489',
    lat: '57.3081'
}
const weatherInformationContainer = document.querySelector('#weather-information-container')

const fetchWeather = async () => {
    const { data } = await axios.get(`https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${coords.lon}/lat/${coords.lat}/data.json`)
    const currentWeather = data.timeSeries[0]
    const currentTemperature = currentWeather.parameters[11].values[0]
    weatherInformationContainer.innerHTML = `Just nu är det ${currentTemperature} grader i Djupviks hamn.`
}

fetchWeather()

