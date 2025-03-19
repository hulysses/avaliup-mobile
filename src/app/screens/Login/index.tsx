import { useNavigation } from "expo-router";
import { BackButton } from "@components/BackButton";
import { Sections } from "@components/Sections";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { H1 } from "@components/H1";
import { Separator } from "@components/Separator";

export function Login() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("main");
  }

  return (
    <>
      <BackButton onPress={handleGoBack} />
      <Sections>
        <H1 marginBottom={16}>Login</H1>
        <Input
          label="E-mail"
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          label="Senha"
          placeholder="Digite sua senha"
          isPassword
          autoCapitalize="none"
        />
        <Button text="Entrar" type="fill" />
        <Separator />
        <Button
          text="Entrar com Google"
          type="border"
          icon="logo-google"
          onPress={() => {}}
        />
      </Sections>
    </>
  );
}
