import { useState } from "react";

import {
  Container,
  EyeIcon,
  InputField,
  InputView,
  Label,
  ToggleButton,
} from "./styles";
import { Feather } from "@expo/vector-icons";

type InputProps = {
  label: string;
  placeholder: string;
  value?: string;
  kewboardType?: string;
  autoCapitalize?: string;
  isPassword?: boolean;
  onChangeText?: (text: string) => void;
};

export function Input({
  label,
  placeholder,
  value,
  kewboardType,
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
          keyboardType={kewboardType ?? "default"}
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
