// import { Container, InputField, Label } from "./styles";

// type InputProps = {
//   label: string;
//   placeholder: string;
//   secureTextEntry?: boolean;
//   value?: string;
// };

// export function Input({ label, placeholder, secureTextEntry }: InputProps) {
//   return (
//     <Container>
//       <Label>{label}</Label>
//       <InputField
//         placeholder={placeholder}
//         secureTextEntry={secureTextEntry ? true : false}
//       />
//     </Container>
//   );
// }

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
  onChangeText?: (text: string) => void;
  isPassword?: boolean;
};

export function Input({
  label,
  placeholder,
  value,
  onChangeText,
  isPassword,
}: InputProps) {
  const [secureTextEntry, setSecureTextEntry] = useState(isPassword ?? false);

  return (
    <Container>
      <Label>{label}</Label>
      <InputView>
        <InputField
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
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
