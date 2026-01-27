import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";
import "./global.css";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

const rootLayout = () => {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("@/assets/fonts/Inter/static/Inter_18pt-Regular.ttf"),
    "Inter-Medium": require("@/assets/fonts/Inter/static/Inter_18pt-Medium.ttf"),
    "Inter-SemiBold": require("@/assets/fonts/Inter/static/Inter_18pt-SemiBold.ttf"),
    "Inter-Bold": require("@/assets/fonts/Inter/static/Inter_18pt-Bold.ttf"),
  });
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="auth" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default rootLayout;
