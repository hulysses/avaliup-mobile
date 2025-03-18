import { useState } from "react";

import {
  Container,
  EyeIcon,
  InputField,
  InputView,
  Label,
  ToggleButton,
} from "./styles";

type InputProps = {
  label: string;
  placeholder: string;
  value?: string;
  keyboardType?: string;
  autoCapitalize?: string;
  isPassword?: boolean;
  onChangeText?: (text: string) => void;
};

export function Input({
  label,
  placeholder,
  value,
  keyboardType,
  autoCapitalize,
  isPassword,
  onChangeText,
}: InputProps) {
  const [secureTextEntry, setSecureTextEntry] = useState(isPassword ?? false);
   
  return (
    <Container>
      <Label>{label}</Label>
      <InputView>
        <InputField
          placeholder={placeholder}
          value={value}
          keyboardType={keyboardType ?? "default"}
          autoCapitalize={autoCapitalize ?? "words"}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
        />
        {isPassword && (
          <ToggleButton onPress={() => setSecureTextEntry(!secureTextEntry)}>
            <EyeIcon name={secureTextEntry ? "eye-off" : "eye"} />
          </ToggleButton>
        )}
      </InputView>
    </Container>
  );
}
