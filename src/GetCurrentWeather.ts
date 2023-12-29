import axios from "axios";

const API_CONFIG = {
  CITY: "Seoul",
  LANG: "kr",
  API_KEY: process.env.WEATHER_API_KEY,
};

export default async function GetCurrentWeather() {
  const { CITY, LANG, API_KEY } = API_CONFIG;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&lang=${LANG}&units=metric`;

  try {
    const response = await axios.get(URL);
    const weatherData = response.data;
    // console.log(weatherData);
    return weatherData;
  } catch (error) {
    console.log(error);
    return null;
  }
}
