import { BackButton } from "@components/BackButton";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "expo-router";
import { Sections } from "@components/Sections";
import { H1 } from "@components/H1";
import { Separator } from "@components/Separator";

export function Register() {
  const navigation = useNavigation();
  function handleGoBack() {
    navigation.navigate("home");
  }

  return (
    <>
      <BackButton onPress={handleGoBack} />
      <Sections>
        <H1 marginBottom={16}>Cadastro</H1>
        <Input
          label="E-mail"
          placeholder="Insira seu e-mail"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Input
          label="Senha"
          placeholder="Insira sua senha"
          isPassword
          autoCapitalize="none"
        />
        <Input
          label="Confirmar senha"
          placeholder="Confirme sua senha"
          isPassword
          autoCapitalize="none"
        />
        <Button text="Cadastrar" type="fill" />
        <Separator />
        <Button text="Cadastrar com Google" type="border" icon="logo-google" />
      </Sections>
    </>
  );
}
