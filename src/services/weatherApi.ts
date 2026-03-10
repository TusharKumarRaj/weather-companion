const API_KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY;

export async function fetchWeather(city: string) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  const data = await response.json();
  return data;
}

export async function fetchWeatherForecast(city: string) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );

  const data = await response.json();
  return data;
}
