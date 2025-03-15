import { Button, ButtonText } from "./styles";

type ButtonProps = {
  text: string;
  type: "fill" | "border";
  children?: React.ReactNode;
  onPress?: () => void;
};

export function Buttons({ text, type, children, onPress }: ButtonProps) {
  return (
    <Button type={type} activeOpacity={0.6} onPress={onPress}>
      <ButtonText type={type}>
        {children ?? null}
        {text}
      </ButtonText>
    </Button>
  );
}
