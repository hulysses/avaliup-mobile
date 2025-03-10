import {
  Container,
  Logo,
  LogoSection,
  Title,
  ButtonsSection,
  Button,
  ButtonText,
} from "./styles";

export function Home() {
  return (
    <Container>
      <LogoSection>
        <Logo source={require("../../../assets/logo-teclado.png")} />
        <Title>Avali.up</Title>
      </LogoSection>
      <ButtonsSection>
        <Button activeOpacity={0.6}>
          <ButtonText>Entrar</ButtonText>
        </Button>
        <Button activeOpacity={0.6}>
          <ButtonText>Cadastrar</ButtonText>
        </Button>
      </ButtonsSection>
    </Container>
  );
}
