import { Button, ButtonText, Icon } from "./styles";

export function BackButton() {
  return (
    <Button activeOpacity={0.6}>
      <Icon />
      <ButtonText>Voltar</ButtonText>
    </Button>
  );
}
