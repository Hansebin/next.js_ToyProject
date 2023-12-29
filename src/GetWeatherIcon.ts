const WEATHER_ICONS = {
  "2": "⚡️",
  "3": "☔️",
  "5": "🌧️",
  "6": "❄️",
  "7": "💨",
};

const CLEAR_SKY_ID = 800;

export default function GetWeatherIcon(weatherId: number) {
  if (weatherId === CLEAR_SKY_ID) {
    return "🌤️";
  } else {
    return (
      WEATHER_ICONS[String(weatherId)[0] as keyof typeof WEATHER_ICONS] || "☁️"
    );
  }
}
