import "./global.css";
import {View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    //  <SafeAreaView style={{ flex: 1 }}>
    //   <View className="flex-1 items-center justify-center bg-white">
    //     <Text>Weather Companion</Text>
    //   </View>
    // </SafeAreaView>
     <HomeScreen />
  );
}