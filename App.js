import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigator";
import React, { useState } from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

//
export const ThemeContext = React.createContext();

const mytheme = DefaultTheme;
mytheme.colors.background = "#1A374D";

//
export default function App() {
  const [theme, setTheme] = useState("Light");
  const themeData = { theme, setTheme };
  return (
    <NavigationContainer theme={mytheme}>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
