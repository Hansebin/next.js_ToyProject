import axios from "axios";

const API_CONFIG = {
  CITY: "Seoul",
  LANG: "kr",
  API_KEY: process.env.WEATHER_API_KEY,
};

const WEATHER_ICONS = {
  "2": "⚡️",
  "3": "☔️",
  "5": "🌧️",
  "6": "❄️",
  "7": "💨",
};

const CLEAR_SKY_ID = 800;

const getCurrentWeather = async () => {
  const { CITY, LANG, API_KEY } = API_CONFIG;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&lang=${LANG}&units=metric`;

  try {
    const response = await axios.get(URL);
    const weatherData = response.data;
    return weatherData;
    // console.log(weatherData);
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getWeatherIcon = (weatherId: number) => {
  if (weatherId === CLEAR_SKY_ID) {
    return "🌤️";
  } else {
    return WEATHER_ICONS[String(weatherId)[0] as keyof typeof WEATHER_ICONS];
  }
};

export default async function ViewWeather() {
  const weatherData = await getCurrentWeather();

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const weatherTemp = weatherData.main.temp;
  const weatherDesc = weatherData.weather[0].description;
  const weatherId = weatherData.weather[0].id;

  const weatherIcon = getWeatherIcon(weatherId);

  return (
    <div>
      <span className="pr-5 text-green-basic">현재 Seoul 날씨</span>
      <span className="pr-4">{weatherTemp}도</span>
      <span>
        {weatherIcon} {weatherDesc}
      </span>
    </div>
  );
}
