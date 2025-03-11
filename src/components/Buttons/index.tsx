import { Button, ButtonText } from "./styles";

type ButtonProps = {
  text: string;
  type: "fill" | "border";
  onPress?: () => void;
};

export function Buttons({ text, type, onPress }: ButtonProps) {
  return (
    <Button type={type} activeOpacity={0.6} onPress={onPress}>
      <ButtonText type={type}>{text}</ButtonText>
    </Button>
  );
}
