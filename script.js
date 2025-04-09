// ========================
// Weather App Script
// Description: Fetches and displays weather information using OpenWeatherMap API
// Author: [Romeo]
// Date: [4/9/025]
// ========================

// -------- API CONFIGURATION --------

// Your personal API key from OpenWeatherMap (for development only; hide this in production)
const apiKey = 'a825e062ce1592d838674b7bef0fcafd';

// Base API endpoint for current weather with metric units
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

// -------- DOM ELEMENT SELECTION --------

// Get the input field where the user types the city name
const searchBox = document.querySelector(".search input");

// Get the search button that the user clicks
const searchBtn = document.querySelector(".search button");

// Get the image element used to show the weather icon
const weatherIcon = document.querySelector(".weather-icon");

// -------- MAIN FUNCTION: FETCH & DISPLAY WEATHER DATA --------

/**
 * Fetches weather data from the API and updates the DOM.
 * @param {string} city - Name of the city entered by the user
 */
async function checkWeather(city) {
    // Hide error message when user starts a new search
    document.querySelector(".error").style.display = "none";
    
    // Prevent empty search requests
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    try {
        // Send request to OpenWeatherMap API
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        const data = await response.json();
        console.log(data);

        // Handle case when city is not found (404 error from API)
        if (data.cod === "404") {
            // Show error message and hide weather info
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
            return;
        }
         // Handle case when city is not found (404 error from API)
         if (data.cod === "404") {
            alert("City not found. Please enter a valid city name.");
            return;
        }

        // Update city name in the UI
        document.querySelector(".city").innerHTML = data.name;

        // Round temperature and display with °C
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

        // Display humidity with % symbol
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

        // Display wind speed with unit
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

        // Dynamically set weather icon based on main weather condition
        switch (data.weather[0].main) {
            case "Clouds":
                weatherIcon.src = "images/clouds.png";
                break;
            case "Clear":
                weatherIcon.src = "images/clear.png";
                break;
            case "Drizzle":
                weatherIcon.src = "images/drizzle.png";
                break;
            case "Rain":
                weatherIcon.src = "images/rain.png";
                break;
            case "Snow":
                weatherIcon.src = "images/snow.png";
                break;
            default:
                // Fallback for any unexpected condition
                weatherIcon.src = "images/default.png";
                break;
        }

        // Show weather data section and hide error message
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    } catch (error) {
        // Catch any unexpected error (e.g., network issues)
        console.error("Error fetching weather data:", error);
        alert("Something went wrong. Please try again later.");
    }
}

// -------- USER INTERACTION HANDLERS --------

// Handle click event on the search button
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value.trim()); // Trim to avoid empty spaces
});

// Optional: Handle Enter key press inside the input field for better UX
searchBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        checkWeather(searchBox.value.trim());
    }
});

// -------- OPTIONAL: AUTO LOAD DEFAULT CITY --------

// Uncomment to auto load weather data for a default city on page load
// checkWeather("Butwal");
