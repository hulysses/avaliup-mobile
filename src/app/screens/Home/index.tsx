import { Buttons } from "@components/Buttons";
import { ButtonsSection, Logo, LogoSection, Title } from "./styles";
import LogoImg from "@assets/logo-teclado.png";

export function Home() {
  return (
    <>
      <LogoSection>
        <Logo source={LogoImg} />
        <Title>Avali.up</Title>
      </LogoSection>
      <ButtonsSection>
        <Buttons text="Entrar" type="fill" />
        <Buttons text="Cadastrar" type="border" />
      </ButtonsSection>
    </>
  );
}
