import { BackButton } from "@components/BackButton";
import { InputSection, Title } from "./styles";
import { Input } from "@components/Input";
import { Buttons } from "@components/Buttons";

export function Register() {
  return (
    <>
      <BackButton />
      <InputSection>
        <Title>Cadastro</Title>
        <Input label="E-mail" placeholder="Insira seu e-mail" />
        <Input label="Senha" placeholder="Insira sua senha" secureTextEntry />
        <Input
          label="Confirmar senha"
          placeholder="Confirme sua senha"
          secureTextEntry
        />
        <Buttons text="Cadastrar" type="fill" />
      </InputSection>
    </>
  );
}
