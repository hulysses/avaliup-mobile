import { ActivityIndicator } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { Home } from "./screens/Home";
import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
} from "@expo-google-fonts/ubuntu";

import theme from "@theme/index";

export default function Index() {
  const [fontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Home /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
