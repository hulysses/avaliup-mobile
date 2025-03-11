import { Button, ButtonText } from "./styles";

type ButtonProps = {
  text: string;
  type: "fill" | "border";
};

export function Buttons({ text, type = "fill" }: ButtonProps) {
  return (
    <Button type={type}>
      <ButtonText type={type}>{text}</ButtonText>
    </Button>
  );
}
