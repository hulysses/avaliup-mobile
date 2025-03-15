import { useNavigation } from "expo-router";
import { BackButton } from "@components/BackButton";
import { Sections } from "@components/Sections";
import { Input } from "@components/Input";
import { Buttons } from "@components/Buttons";
import { H1 } from "@components/H1";
import { Google } from "@components/Google";
import { Separator } from "@components/Separator";

export function Login() {
  const navigation = useNavigation();
  function handleGoBack() {
    navigation.navigate("home");
  }

  return (
    <>
      <BackButton onPress={handleGoBack} />
      <Sections>
        <H1 marginBottom={16}>Login</H1>
        <Input
          label="E-mail"
          placeholder="Digite seu e-mail"
          kewboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          label="Senha"
          placeholder="Digite sua senha"
          isPassword
          autoCapitalize="none"
        />
        <Buttons text="Entrar" type="fill" />
        <Separator />
        <Google />
      </Sections>
    </>
  );
}
