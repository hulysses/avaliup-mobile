import { Buttons } from "@components/Buttons";
import { Logo, LogoSection, Title } from "./styles";
import LogoImg from "@assets/logo-teclado.png";
import { useNavigation } from "@react-navigation/native";
import { Sections } from "@components/Sections";

export function Home() {
  const navigation = useNavigation();

  function handleRedirectRegisterScreen() {
    navigation.navigate("register");
  }

  return (
    <>
      <LogoSection>
        <Logo source={LogoImg} />
        <Title>Avali.up</Title>
      </LogoSection>
      <Sections>
        <Buttons text="Entrar" type="fill" />
        <Buttons
          text="Cadastrar"
          type="border"
          onPress={handleRedirectRegisterScreen}
        />
      </Sections>
    </>
  );
}
