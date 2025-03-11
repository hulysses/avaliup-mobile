import { Buttons } from "@components/Buttons";
import { ButtonsSection, Container, Logo, LogoSection, Title } from "./styles";
import LogoImg from "@assets/logo-teclado.png";

export function Home() {
  return (
    <Container>
      <LogoSection>
        <Logo source={LogoImg} />
        <Title>Avali.up</Title>
      </LogoSection>
      <ButtonsSection>
        <Buttons text="Entrar" type="fill" />
        <Buttons text="Cadastrar" type="border" />
      </ButtonsSection>
    </Container>
  );
}
