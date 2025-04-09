
---

# 🌦️ Weather App

## 📌 Overview

The **Weather App** is a sleek, responsive, and user-friendly web application that delivers real-time weather updates. By integrating the **OpenWeatherMap API**, users can search for current weather conditions in any city worldwide. Key metrics like **temperature**, **humidity**, **wind speed**, and **dynamic weather icons** are displayed with a clean interface, offering a seamless experience across all devices.

---

## ✨ Key Features

- **🔁 Real-time Weather Data**: Fetches and displays current weather data dynamically based on user input.
- **🏙️ City Search**: Users can enter the name of any city to retrieve local weather details.
- **📊 Weather Information**:
  - Temperature in Celsius (°C)
  - Humidity (%)
  - Wind Speed (km/h)
- **🌤️ Dynamic Weather Icons**: Shows intuitive weather icons like sunny, rainy, cloudy, etc.
- **⚠️ Error Handling**: Displays a user-friendly message if the entered city is not found.
- **📱 Responsive Design**: Optimized for all screen sizes including desktops, tablets, and mobile devices.

---

## 🧰 Technologies Used

- **HTML5**: For the semantic structure of the webpage.
- **CSS3**: For styling, layout, and responsive design.
- **JavaScript (ES6)**: For logic, API handling, and DOM manipulation.
- **OpenWeatherMap API**: To fetch live weather data.

---

## 🚀 Getting Started

### 📦 Prerequisites

- A modern web browser (Chrome, Firefox, Safari, etc.)
- A text editor or IDE (e.g., VS Code, Sublime Text)

### 🛠️ Installation & Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Romeoparajuli/weatherApp.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd weatherApp
   ```

3. **Open the App**:
   - Open the `index.html` file in your browser.
   - You can also right-click the file and select **"Open with" → Browser**.

---

## 🧑‍💻 How to Use

1. **Search for a City**: Enter the city name in the search box.
2. **Click the Search Button**: Weather data will be fetched instantly.
3. **View Weather Details**:
   - Current temperature (°C)
   - Humidity (%)
   - Wind speed (km/h)
   - Weather icon (sunny, cloudy, rainy, etc.)
4. **Error Handling**: If the city is not found, an alert message will notify the user.

---

## 🔗 API Integration

This app uses the **OpenWeatherMap API**:

```
https://api.openweathermap.org/data/2.5/weather?units=metric&q={city_name}&appid={API_KEY}
```

- Replace `{API_KEY}` in `script.js` with your personal API key.
- Sign up at [OpenWeatherMap](https://openweathermap.org/) to get a free API key.

**Example Request**:
```bash
https://api.openweathermap.org/data/2.5/weather?units=metric&q=London&appid=your_api_key
```

The API responds with a JSON object containing all relevant weather data.

---

## 📁 File Structure

```
weatherApp/
│
├── index.html        # Main HTML page
├── style.css         # Styles and layout
├── script.js         # JavaScript logic and API integration
└── images/           # Weather-related icons (e.g., sun.png, rain.png)
```

---

## 🖼️ Screenshots

> ![Weather App Screenshot](https://github.com/user-attachments/assets/0482d94d-6048-4415-8a2a-359ad5efda24)
<video controls src="20250409-0505-27.6243414.mp4" title="Title"></video>

---

## 🔒 License

This project is licensed under the **MIT License**. See the `LICENSE` file for more details.

---

## 🙏 Acknowledgements

- **[OpenWeatherMap](https://openweathermap.org/)** – for the free weather API.
- **Poppins Font** – used for clean, modern typography.
- **[Unsplash](https://unsplash.com/)** – for free background/weather images (if applicable).

---

## 🤝 Contributions

Contributions are welcome! If you'd like to improve the app:

1. Fork the repository
2. Create a feature/bugfix branch
3. Commit your changes with clear messages
4. Push the branch to your fork
5. Submit a pull request

---

## 📬 Contact

- **Email**: [milankit123@gmail.com](mailto:milankit123@gmail.com)  
- **GitHub**: [github.com/Romeoparajuli](https://github.com/Romeoparajuli)

---

## 🔮 Future Enhancements

- Add a 5-day weather forecast feature
- Display additional details (sunrise/sunset, UV index, pressure)
- Improve UI/UX with animations and transitions

---

