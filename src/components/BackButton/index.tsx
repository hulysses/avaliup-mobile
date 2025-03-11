import { Button, ButtonText, Icon } from "./styles";

type BackButtonProps = {
  onPress: () => void;
};

export function BackButton({ onPress }: BackButtonProps) {
  return (
    <Button activeOpacity={0.6} onPress={onPress}>
      <Icon />
      <ButtonText>Voltar</ButtonText>
    </Button>
  );
}
