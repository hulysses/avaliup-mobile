import { Feather } from "@expo/vector-icons";
import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  gap: 8px;
`;

export const Label = styled.Text`
  padding-left: 4px;
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.MD};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.BLUE_DARK_400};
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.FONT_FAMILY.MEDIUM};
`;

export const InputView = styled.View`
  height: 40px;
  padding: 12px;
  flex-direction: row;
  align-items: center;
  border-radius: 6px;
  border: 1px solid
    ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.BLUE_DARK_400};
`;

export const InputField = styled.TextInput.attrs(
  ({ theme }: { theme: DefaultTheme }) => ({
    placeholderTextColor: theme.COLORS.BLUE_DARK_200,
  })
)`
  flex: 1;
  padding: 0;
  height: 100%;
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.MD};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.BLUE_DARK_400};
`;

export const ToggleButton = styled.TouchableOpacity`
  padding-left: 8px;
  align-items: center;
  justify-content: center;
`;

export const EyeIcon = styled(Feather)`
  font-size: 14px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.BLUE_DARK_200};
`;
