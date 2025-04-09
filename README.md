# Weather App

## Overview

The **Weather App** is a responsive, user-friendly web application that provides real-time weather updates. By utilizing the **OpenWeatherMap API**, the app allows users to search for weather conditions in any city worldwide. It offers key information such as temperature, humidity, wind speed, and weather condition icons. The design ensures smooth user interaction, making it accessible both on desktop and mobile devices.

## Key Features

- **Real-time Weather Data**: Fetches and displays current weather data based on user input.
- **City Search**: Users can input the name of any city to get weather details.
- **Weather Information**: Displays the following weather details:
  - Temperature in Celsius (°C)
  - Humidity as a percentage
  - Wind speed in km/h
- **Weather Icons**: Displays dynamic weather icons based on the current weather conditions (e.g., sunny, rainy, cloudy, etc.).
- **Error Handling**: Displays a meaningful error message if the entered city is not found.
- **Responsive Design**: The app is designed to be fully responsive, providing a seamless experience across devices (desktop, tablet, mobile).
  
## Technologies Used

The app was built using the following technologies:

- **HTML5**: For the markup structure of the web page.
- **CSS3**: For styling and layout, ensuring the app is visually appealing and responsive.
- **JavaScript (ES6)**: For implementing functionality, interacting with the OpenWeatherMap API, and dynamically updating the UI.
- **OpenWeatherMap API**: To fetch the real-time weather data for any city.
  
## Prerequisites

To run the Weather App locally, the following are required:

- **Web Browser**: A modern browser (e.g., Google Chrome, Mozilla Firefox, Safari) for viewing the app.
- **Text Editor/IDE**: Any text editor or IDE for code editing (e.g., Visual Studio Code, Sublime Text).
  
## Installation & Setup

Follow these steps to run the Weather App locally:

### 1. Clone the Repository

Clone the repository from GitHub using the following command:

```bash
git clone https://github.com/Romeoparajuli/weatherApp.git
```
2. Navigate to the Project Directory
   
Change to the project directory:
cd weatherApp

4. Open the index.html File
Open the index.html file in your browser to run the app. You can simply double-click the index.html file or open it using your browser's "Open File" option.

How to Use
a.Search for a City: Enter the name of a city in the search input box.
b.Click the Search Button: Hit the search button to fetch the weather details for the entered city.
c.View Weather Details: The app will display:
d.The current temperature in °C
e.The humidity percentage
f.The wind speed in km/h
g.A weather icon corresponding to the current weather condition (e.g., sunny, cloudy, rainy).
h.Handle Errors: If the city entered is not found, an alert will appear indicating that the city is not recognized.

API Integration
The app integrates with the OpenWeatherMap API, which provides real-time weather data. The API endpoint used is:

```bash
https://api.openweathermap.org/data/2.5/weather?units=metric&q={city_name}&appid={API_KEY}
```
To use the OpenWeatherMap API, you must replace the placeholder {API_KEY} in the script.js file with your own API key, which you can obtain by signing up for a free account at OpenWeatherMap.

Example API Request:
For the city of London, the request will look like:

```bash
https://api.openweathermap.org/data/2.5/weather?units=metric&q=London&appid=your_api_key
```
The API will return a JSON response containing the weather information, which is then displayed on the app.

File Structure
The project contains the following files and folders:

index.html: The main HTML file that defines the structure and layout of the app.
script.js: The JavaScript file responsible for fetching data from the OpenWeatherMap API, handling the city search, and updating the UI.
style.css: The CSS file that styles the app's components, including layout, color scheme, and responsiveness.
images/: A folder containing weather-related images/icons used in the app (e.g., rain.png, clear.png, humidity.png, etc.).


## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements
OpenWeatherMap for providing the free weather API.

Poppins Font for the typography used in the design of the app.

Unsplash for the free and beautiful images used in the app (if applicable).

##Contributions
Contributions to this project are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

To contribute:

Fork the repository.

Create a new branch for your feature or bug fix.
Make your changes and commit them with a meaningful commit message.
Push your changes to your forked repository.
Open a pull request to merge your changes into the main repository.

## Contact
For any questions or inquiries, please contact:

Email: milankit123@gmail.com
GitHub Profile: https://github.com/Romeoparajuli

Screenshots (Optional)
![image](https://github.com/user-attachments/assets/0482d94d-6048-4415-8a2a-359ad5efda24)



##Future Enhancements (Optional)
Add a feature to display the weather forecast for the next few days.
Provide more weather details, such as sunrise/sunset times, UV index, etc.
Enhance the UI with animations or better styling for a more polished experience.

