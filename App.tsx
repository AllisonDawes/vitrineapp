import React from "react";
import { LogBox } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import AppLoading from "expo-app-loading";

import { AuthProvider } from "./src/hooks/auth";

import { AppRoutes } from "./src/routes";

import theme from "./src/global/styles/theme";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import {
  RobotoSlab_400Regular,
  RobotoSlab_500Medium,
  RobotoSlab_700Bold,
} from "@expo-google-fonts/roboto-slab";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
    RobotoSlab_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  LogBox.ignoreAllLogs();

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <StatusBar backgroundColor="#222" />
        <AppRoutes />
      </AuthProvider>
    </ThemeProvider>
  );
}
