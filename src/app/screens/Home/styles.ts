import styled, { DefaultTheme } from "styled-components/native";

export const LogoSection = styled.View`
  align-items: center;
  gap: 4px;
`;

export const Logo = styled.Image`
  width: 81px;
  height: 42px;
  object-fit: contain;
`;

export const Title = styled.Text`
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.XL};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.BLUE_DARK_400};
`;

export const ButtonsSection = styled.View`
  flex: 1;
  justify-content: center;
  gap: 16px;
`;
