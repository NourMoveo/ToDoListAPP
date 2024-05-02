
import { SafeAreaProvider } from "react-native-safe-area-context";

import Navigation from "./src/navigation";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { useTranslation } from "react-i18next";

export default function App() {

  // const { t } = useTranslation();
  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar />
    </SafeAreaProvider>
  );
}