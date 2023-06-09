import React from "react";
import { ThemeProvider } from "styled-components/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { theme } from "./src/infrastructure/theme/index.js";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ExpoStatusBar style="auto" />
        <RestaurantsScreen />
      </ThemeProvider>
    </>
  );
}
