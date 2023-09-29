//Variable for our DIVS and BTNS
const showWeather = document.getElementById('displayWeather');
const displayTemp = document.getElementById('displayTemp');
const displayDescrip = document.getElementById('displayDescrip');
const displayErr = document.getElementById('displayError');
const zipCodeInput = document.getElementById('inputZip');
const submitBtn = document.getElementById('zipBtn');
const yourCity = document.getElementById('displayLocation')
// Event listener for input box
zipCodeInput.addEventListener("input", updateValue);
function updateValue(e) {
    console.log(e.target.value)
    zipCodeInput.value = e.target.value
}
//API KEY 
const apiKey = '9f828be37dae1608f383c3381afd374a';

// Event listener for submit button
submitBtn.addEventListener('click', () => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCodeInput.value}&appid=${apiKey}`;
    console.log(apiUrl);
    axios.get(apiUrl)
        .then(response => {
            // Need vars to catch the data
            const weatherData = response.data;
            const location = response.data.name;
            const temperature = Math.floor((weatherData.main.temp - 273.15)*1.8 + 32);
            let description = weatherData.weather[0].description;
            const upperDescrip = description.toUpperCase()
            //Now I need to display content.....innerHTML?....Went with textContent
            showWeather.textContent = `${temperature}F`
            displayDescrip.textContent = `${upperDescrip}`
            yourCity.textContent = `${location}`;
            displayError.textContent = '';
        })
        // Catching errors
        .catch(error => {
            //Run a console.log to see if its actually catching
            console.error('Error fetching data:', error);
            // I need a function to add the error message but not always....Start with error 200 ===?
            if (error === 200) {

            }
            //Display the error message when user inputs incorrectly
            else {
               displayError.textContent = `Invalid Zip please try again`;
               //My other content not leaving......for now lets add '' for each div
               displayDescrip.textContent = ' ' ;
               showWeather.textContent = ' ';
               yourCity.textContent = ' ';
            }
        })
})

