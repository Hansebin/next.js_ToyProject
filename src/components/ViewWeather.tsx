import GetCurrentWeather from "../GetCurrentWeather";
import GetWeatherIcon from "../GetWeatherIcon";

export default async function ViewWeather() {
  const weatherData = await GetCurrentWeather();

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const weatherTemp = weatherData.main.temp;
  const weatherDesc = weatherData.weather[0].description;
  const weatherId = weatherData.weather[0].id;

  const weatherIcon = GetWeatherIcon(weatherId);

  return (
    <div>
      <span className="pr-1">현재 Seoul 날씨</span>
      <span className="pr-1">{weatherTemp}도</span>
      <span>
        {weatherIcon} {weatherDesc}
      </span>
    </div>
  );
}
