import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import { fetchWeather } from "../services/weatherApi"

export default function HomeScreen(){
    const [city, setCity] = useState("");

    useEffect(() => {

     if (!city) return;

     const timer = setTimeout(() => {
      fetchWeather(city)
     }, 500)

     return () => clearTimeout(timer)
  
     }, [city])

    return(
        <SafeAreaView style={{flex:1}}>
         <SearchBar setCity={setCity} />
        </SafeAreaView> 
    );
}