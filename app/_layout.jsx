import { StyleSheet, Text, View } from "react-native";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

const RootLayout = () => {
  const { fontsLoaded, error } = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
  });
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

useEffect(() => {
  if (error) throw error;

  if (fontsLoaded) SplashScreen.hideAsync();
}, [fontsLoaded, error]);

export default RootLayout;
