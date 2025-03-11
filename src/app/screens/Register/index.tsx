import { BackButton } from "@components/BackButton";
import { InputSection, Title } from "./styles";
import { Input } from "@components/Input";
import { Buttons } from "@components/Buttons";
import { useNavigation } from "expo-router";

export function Register() {
  const navigation = useNavigation();
  function handleGoBack() {
    navigation.navigate("home");
  }

  return (
    <>
      <BackButton onPress={handleGoBack} />
      <InputSection>
        <Title>Cadastro</Title>
        <Input label="E-mail" placeholder="Insira seu e-mail" />
        <Input label="Senha" placeholder="Insira sua senha" secureTextEntry />
        <Input
          label="Confirmar senha"
          placeholder="Confirme sua senha"
          secureTextEntry
        />
        <Buttons text="Cadastrar" type="fill"/>
      </InputSection>
    </>
  );
}
