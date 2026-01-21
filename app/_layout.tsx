import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";
import "./global.css";
import { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

const rootLayout = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setTimeout(async () => {
      try {
        await SplashScreen.hideAsync();
        setReady(true);
      } catch (error) {
        console.log(error);
      }
    }, 3000);
  }, []);

  if (!ready) return null;
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="auth" options={{ headerShown: false }} />
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="restaurant" options={{ headerShown: false }} />
    </Stack>
  );
};

export default rootLayout;
