
const showWeather = document.getElementById('displayWeather');
const displayTemp = document.getElementById('displayTemp');
const displayDescrip = document.getElementById('displayDescrip')

const zipCodeInput = document.getElementById('inputZip');
const submitBtn = document.getElementById('zipBtn');
zipCodeInput.addEventListener("input", updateValue);

function updateValue(e) {
    console.log(e.target.value)
    zipCodeInput.value = e.target.value
}

const apiKey = '9f828be37dae1608f383c3381afd374a';


submitBtn.addEventListener('click', () => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCodeInput.value}&appid=${apiKey}`;
    console.log(apiUrl);
    axios.get(apiUrl)
        .then(response => {
            const weatherData = response.data;
            const temperature = Math.floor((weatherData.main.temp - 273.15)*1.8 + 32);
            const description = weatherData.weather[0].description;
            showWeather.innerHTML = `${temperature}F`

        })
        .catch(error => {
            console.error('Error fetching data:', error);
            divText.inner
        })
})

