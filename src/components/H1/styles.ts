import styled, { DefaultTheme } from "styled-components/native";

type TextProps = {
  marginBottom?: number;
};

export const Text = styled.Text<TextProps>`
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.XL};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.BLUE_DARK_400};
  margin-bottom: ${({ marginBottom }: { marginBottom: number }) =>
    marginBottom ? `${marginBottom}px` : "0px"};
`;
