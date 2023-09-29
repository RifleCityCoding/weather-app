const showWeather = document.getElementById('displayWeather');
const displayTemp = document.getElementById('displayTemp');
const displayDescrip = document.getElementById('displayDescrip');
const displayErr = document.getElementById('displayError');
const zipCodeInput = document.getElementById('inputZip');
const submitBtn = document.getElementById('zipBtn');
const yourCity = document.getElementById('displayLocation')

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
      const location = response.data.name;
      const temperature = Math.floor((weatherData.main.temp - 273.15) * 1.8 + 32);
      let description = weatherData.weather[0].description;
      const upperDescrip = description.toUpperCase()
      showWeather.textContent = `${temperature}F`
      displayDescrip.textContent = `${upperDescrip}`
      yourCity.textContent = `${location}`;
      displayError.textContent = '';
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      if (error === 200) {

      }
      else {
        displayError.textContent = `Invalid Zip please try again`;
        displayDescrip.textContent = ' ';
        showWeather.textContent = ' ';
        yourCity.textContent = ' ';
      }
    })
})
