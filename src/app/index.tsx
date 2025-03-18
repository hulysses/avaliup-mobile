import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
} from "@expo-google-fonts/ubuntu";

import { Loading } from "@components/Loading";
import theme from "@theme/index";
import { AppRoutes } from "../routes/app.routes";
import { Container } from "./styles";

export default function Index() {
  const [fontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Container>{fontsLoaded ? <AppRoutes /> : <Loading />}</Container>
    </ThemeProvider>
  );
}
