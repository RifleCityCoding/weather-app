
const 



const zipCodeInput =document.getElementById('inputZip');
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
    const weatherData = response.data
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
 })})

