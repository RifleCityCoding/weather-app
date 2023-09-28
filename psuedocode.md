
Let's psuedo this weather!

### What does a weather app need? What info does it provide?
```
What does this need to provide the user?<br>
Temperature<br>
Location (City/State)<br>
Weather: Rain, Sun, Cloudy, Thunderstorm, Hail, Snow
```

### Let's build an idea of our HTML for the project
```
We need at least 1 button for the user to click<br>
    Button: Need this to show weather when clicked if user has put in zip code<br>
    We need a box for user to input their location (Stretch goal, use geolocation)<br>
    Lets have a box below that is hidden unless showing an error<br>
    I would like to try to build this like a typical weather app<br>
        From top to bottom: User input and button --> City name --> Picture representing weather with actual weather posted below it --> Temperature
    DIVS : We are going to start with 5. Stretch goal is to bring it down to one.<br>
    Div 1 : Contains button and user input box
    Div 2 : Contains Error box display
    Div 3 : Displays city and state
    Div 4: Displays representative photo and states current weather condition
    Div 5: Displays temperature(current)<br>
    We are going to need to remember to add scripts accessing axios/github/ etc. 
```

### What does our javascript need?
```
Functions: <br>
    onButtonClick
    
```