import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import { fetchWeather } from "../services/weatherApi"
import { fetchWeatherForecast } from "../services/weatherApi";
import WeatherCard from "../components/WeatherCard";
import { ForecastData, WeatherData } from "../types/weather";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar, View, ActivityIndicator } from "react-native";

export default function HomeScreen() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    if (!city) return;

    setLoading(true);
    const timer = setTimeout(async () => {
      try {
        const weatherResponse = await fetchWeather(city)
        if (weatherResponse.cod === 200 || weatherResponse.main) {
          setWeather(weatherResponse);
        }
        
        const forecastResponse = await fetchWeatherForecast(city)
        if(forecastResponse.cod === 200 || forecastResponse.list)
        {
            setForecast(forecastResponse);
        }

      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }, 500)


    return () => clearTimeout(timer)

  }, [city])

  return (
    <LinearGradient
      colors={["#3f9ff4","#2182d7","#0085fa"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      className="flex-1"
    >
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <SafeAreaView className="flex-1">
        <SearchBar setCity={setCity} city={city} />
        {loading ? (
          <View className="flex-1 justify-center items-center">
            <ActivityIndicator size="large" color="white" />
          </View>
        ) : weather ? (
          <WeatherCard weather={weather} forecast={forecast} />
        ) : null}
      </SafeAreaView>
    </LinearGradient>
  );
}