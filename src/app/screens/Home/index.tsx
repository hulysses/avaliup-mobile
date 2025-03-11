import { Buttons } from "@components/Buttons";
import { ButtonsSection, Container, Logo, LogoSection, Title } from "./styles";

export function Home() {
  return (
    <Container>
      <LogoSection>
        <Logo source={require("../../../assets/logo-teclado.png")} />
        <Title>Avali.up</Title>
      </LogoSection>
      <ButtonsSection>
        <Buttons text="Entrar" type="fill" />
        <Buttons text="Cadastrar" type="border" />
      </ButtonsSection>
    </Container>
  );
}
