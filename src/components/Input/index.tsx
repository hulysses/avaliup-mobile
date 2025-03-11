import { Container, InputField, Label } from "./styles";

type InputProps = {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
  value?: string;
};

export function Input({ label, placeholder, secureTextEntry }: InputProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <InputField
        placeholder={placeholder}
        secureTextEntry={secureTextEntry ? true : false}
      />
    </Container>
  );
}
