import { Button, ButtonText } from "./styles";

type ButtonFillProps = {
  text: string;
  type: "fill" | "border";
};

export function ButtonFill({ text, type = "fill" }: ButtonFillProps) {
  return (
    <Button type={type}>
      <ButtonText type={type}>{text}</ButtonText>
    </Button>
  );
}
