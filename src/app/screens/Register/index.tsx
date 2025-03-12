import { BackButton } from "@components/BackButton";
import { Input } from "@components/Input";
import { Buttons } from "@components/Buttons";
import { useNavigation } from "expo-router";
import { Sections } from "@components/Sections";
import { H1 } from "@components/H1";

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
          isPassword={false}
        />
        <Input label="Senha" placeholder="Insira sua senha" isPassword={true} />
        <Input
          label="Confirmar senha"
          placeholder="Confirme sua senha"
          isPassword={true}
        />
        <Buttons text="Cadastrar" type="fill" />
      </Sections>
    </>
  );
}
