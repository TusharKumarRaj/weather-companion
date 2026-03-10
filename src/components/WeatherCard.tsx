import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { WeatherData, ForecastData } from "../types/weather";

// helper to pick an icon name from description
function getWeatherIcon(description: string) {
  const desc = description.toLowerCase();
  if (desc.includes("rain")) return "weather-rainy";
  if (desc.includes("cloud")) return "weather-cloudy";
  if (desc.includes("clear")) return "weather-sunny";
  if (desc.includes("snow")) return "weather-snowy";
  if (desc.includes("storm") || desc.includes("thunder")) return "weather-lightning";
  return "weather-partly-cloudy";
}

type Props = {
  weather: WeatherData;
  forecast?: ForecastData | null;
};

export default function WeatherCard({ weather, forecast }: Props) {
  const mainWeather = weather.weather[0];
  const weatherIcon = getWeatherIcon(mainWeather.description);
  const capitalizedDescription = mainWeather.description.charAt(0).toUpperCase() + mainWeather.description.slice(1);

  return (
    <View className="flex-1 justify-between">
      {/*Temp Shown*/}
      <View className="px-6 mt-8 flex-col justify-between items-start">
        <Text className="text-white font-light tracking-tighter text-[130px] leading-[140px]">
          {Math.round(weather.main.temp)}°
        </Text>
        <Text
          className="text-white text-lg font-medium opacity-90 text-center"
          numberOfLines={1}
        >
          {capitalizedDescription}
        </Text>
      </View>

      {/*Big Icon*/}
      <View className="flex-1 items-center justify-center">
        <MaterialCommunityIcons
          name={weatherIcon}
          size={130}
          color="rgba(255,255,255,0.95)"
        />
      </View>

      {/* Forecast data UI*/}
      <View className="bg-white rounded-t-[40px] pt-6 pb-12 px-8">
        <View className="items-center mb-6">
          <View className="w-12 h-1 bg-gray-300 rounded-full mb-6" />
          <Text className="text-black text-base font-bold">Weather Today</Text>
        </View>

        <View className="flex-row justify-between items-center">
          {forecast?.list?.slice(0, 4).map((item, idx) => {

            {/*making date-time in UTC - "yyyy-mm-ddT00:00:00Z"*/ }
            const date = new Date(item.dt_txt.replace(" ", "T") + "Z");

            let hours = date.getHours();
            const ampm = hours >= 12 ? "PM" : "AM";
            hours = hours % 12;
            hours = hours ? hours : 12;
            const timeStr = `${hours.toString().padStart(2, "0")}:00 ${ampm}`;

            const iconName = getWeatherIcon(item.weather[0].description);

            {/*Planning to add for other weather conditions as well*/ }
            const isSunny = item.weather[0].description.toLowerCase().includes("clear");

            return (
              <View key={idx} className="items-center">
                <MaterialCommunityIcons
                  name={iconName as any}
                  size={32}
                  color={isSunny ? "#FBBF24" : "#4B5563"}
                />
                <Text className="text-gray-400 text-[10px] my-3 font-medium">
                  {timeStr}
                </Text>
                <Text className="text-black text-xl font-bold">
                  {Math.round(item.main.temp)}°
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}