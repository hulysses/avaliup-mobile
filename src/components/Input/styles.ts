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

export const InputField = styled.TextInput`
  height: 40px;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid
    ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.BLUE_DARK_400};
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.MD};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.BLUE_DARK_400};
`;
