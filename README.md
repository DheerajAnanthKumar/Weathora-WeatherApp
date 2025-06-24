# 🌤️ Weathora - Weather App

**Weathora** is a sleek, responsive weather application that lets users view real-time weather data for any city. Built with React and Tailwind CSS, it fetches live weather info from the **OpenWeatherMap API** and enriches the visual experience by displaying high-quality city backgrounds from the **Unsplash API**.

🚀 Live Demo: [Link](https://weathora-weatherapp.vercel.app/)

  ![weathora](https://github.com/user-attachments/assets/921d9b52-6cfd-4d36-837b-d1a0f0f9e817)
  
---

## 📖 About

**Weathora** is designed to provide users with:

* Accurate weather data at a glance.
* An immersive, visually rich experience using city-specific background images.

---

## ✨ Features

* 🔍 **Search Functionality** – Enter a city name to get the latest weather.
* 🌡️ **Real-Time Weather Data** – Displays temperature, weather type, humidity, and wind speed.
* 🖼️ **Dynamic Backgrounds** – Fetches a unique background image of the searched city using the Unsplash API.
* 💡 **Error Handling** – Notifies user when a city isn't found or on API error.

---

## 🛠️ Technologies Used

* ⚛️ **React** – JavaScript library for building the user interface.
* 💨 **Tailwind CSS** – Utility-first CSS framework for styling.
* ☁️ **OpenWeatherMap API** – For fetching live weather data.
* 📷 **Unsplash API** – For fetching city-specific images.
* 🎨 **Google Fonts + Font Awesome** – For custom fonts and icons.
* 🌐 **Vite** – Fast and modern frontend tooling.

---

## 📸 Screenshots

![Home screen](https://github.com/user-attachments/assets/4e8dbce3-42f3-457a-a407-c3f2ba000f09)


![Result screen](https://github.com/user-attachments/assets/3716b17a-7d9e-4f15-b5f3-bd1f3e0277a6)


---

## 📁 Folder Structure (Simplified)

```
src/
├── assets/           # Images and icons
├── components/
│   └── ViewSection.jsx
├── App.jsx
└── main.jsx
```


---

## 📦 Installation

1. Clone the repo:

```bash
git clone https://github.com/yourusername/weathora-weather-app.git
cd weathora-weather-app
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file and add your API keys:

```
VITE_WEATHER_API_KEY=your_openweather_api_key
VITE_UNSPLASH_API_KEY=your_unsplash_api_key
```

4. Run the app:

```bash
npm run dev
```

---

## 🙏 Acknowledgements

* [OpenWeatherMap](https://openweathermap.org/) – For providing real-time weather data.
* [Unsplash](https://unsplash.com/developers) – For stunning city background images.
* [Google Fonts](https://fonts.google.com/) – For beautiful typography.
* [Font Awesome](https://fontawesome.com/) – For search and UI icons.

---

## About the Author ✍️
This project was created by Dheeraj Ananth Kumar. You can find more of my projects on my [GitHub](https://github.com/DheerajAnanthKumar).
