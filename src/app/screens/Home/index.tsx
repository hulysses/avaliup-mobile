import { Buttons } from "@components/Buttons";
import { Logo, LogoSection } from "./styles";
import LogoImg from "@assets/logo-teclado.png";
import { useNavigation } from "@react-navigation/native";
import { Sections } from "@components/Sections";
import { H1 } from "@components/H1";

export function Home() {
  const navigation = useNavigation();

  function handleRedirectRegisterScreen() {
    navigation.navigate("register");
  }

  function handleRedirectLoginScreen() {
    navigation.navigate("login");
  }

  return (
    <>
      <LogoSection>
        <Logo source={LogoImg} />
        <H1>Avali.up</H1>
      </LogoSection>
      <Sections>
        <Buttons
          text="Entrar"
          type="fill"
          onPress={handleRedirectLoginScreen}
        />
        <Buttons
          text="Cadastrar"
          type="border"
          onPress={handleRedirectRegisterScreen}
        />
      </Sections>
    </>
  );
}
