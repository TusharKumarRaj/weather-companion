import { TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
    setCity: (city: string) => void;
};

export default function SearchBar({setCity}: Props) {
  return (
    <View className="mx-5 my-4 flex-row items-center bg-blue-800/20 border border-white/20 rounded-2xl p-4 px-4 py-3">
      <Ionicons name="search" size={20} color="#9CA3AF" />
      <TextInput 
        className="ml-3 flex-1 text-black"
        placeholder="Enter city" 
        placeholderTextColor="#6B7280"
        onChangeText={setCity}
      />
    </View>
  );
}