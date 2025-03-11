import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "app/screens/Home";
import { Register } from "app/screens/Register";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "white" },
        animation: "fade",
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="register" component={Register} />
    </Navigator>
  );
}
