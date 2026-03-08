import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import SearchBar from "../components/SearchBar";

export default function HomeScreen(){
    const [city, setCity] = useState("");

    return(
        <SafeAreaView style={{flex:1}}>
         <SearchBar setCity={setCity} />
        </SafeAreaView> 
    );
}