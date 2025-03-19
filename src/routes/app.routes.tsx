import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Main } from "app/screens/Main";
import { Login } from "app/screens/Login";
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
      <Screen name="main" component={Main} />
      <Screen name="register" component={Register} />
      <Screen name="login" component={Login} />
    </Navigator>
  );
}
