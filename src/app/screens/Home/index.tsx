import { ButtonFill } from "@components/Button";
import { ButtonsSection, Container, Logo, LogoSection, Title } from "./styles";

export function Home() {
  return (
    <Container>
      <LogoSection>
        <Logo source={require("../../../assets/logo-teclado.png")} />
        <Title>Avali.up</Title>
      </LogoSection>
      <ButtonsSection>
        <ButtonFill text="Entrar" type="fill" />
        <ButtonFill text="Cadastrar" type="border" />
      </ButtonsSection>
    </Container>
  );
}
