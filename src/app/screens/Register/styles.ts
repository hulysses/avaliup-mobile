import styled, { DefaultTheme } from "styled-components/native";

export const Title = styled.Text`
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.XL};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.BLUE_DARK_400};
  margin-bottom: 16px;
`;

export const InputSection = styled.View`
  flex: 1;
  justify-content: center;
  gap: 16px;
`;
