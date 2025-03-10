import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin: 0 24px 0 24px;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.COLORS.WHITE_400};
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const LogoSection = styled.View`
  align-items: center;
  justify-content: center;
  gap: 4px;
  position: absolute;
  top: 64px;
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
  width: 100%;
  justify-content: center;
  gap: 16px;
  flex: 1;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.COLORS.BLUE_DARK_400};
  padding: 12px 0 12px 0;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.MD};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.WHITE_400};
`;
