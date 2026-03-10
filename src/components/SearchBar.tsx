import { TextInput, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";

type Props = {
    setCity: (city: string) => void;
    city?: string;
};

export default function SearchBar({setCity, city = ""}: Props) {
  const [input, setInput] = useState(city);

  useEffect(() => {
    setInput(city);
  }, [city]);

  return (
    <View className="flex-row justify-between items-center px-6 pt-4 pb-2 z-10 w-full">
      <View className="flex-row items-center flex-1 rounded-lg bg-white/50 pl-2">
        <Ionicons name="location-sharp" size={20} color="white" />
        <TextInput 
          className="ml-2 flex-1 text-white text-lg font-medium"
          placeholder="Enter city..." 
          placeholderTextColor="rgba(255,255,255,0.7)"
          value={input}
          onChangeText={setInput}
          onSubmitEditing={() => setCity(input)}
          returnKeyType="search"
        />
      </View>
      <TouchableOpacity className="ml-4">
        <Ionicons name="menu" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
}