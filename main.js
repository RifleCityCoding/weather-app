


const axios = require('axios');

const apiKey = '9f828be37dae1608f383c3381afd374a'; 

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

axios.get(apiUrl)
  .then(response => {
    // Handle the response data
    console.log(response.data);
  })
  .catch(error => {
    // Handle any errors
    console.error('Error fetching data:', error);
  });