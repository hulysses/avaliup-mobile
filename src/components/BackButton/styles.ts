import styled, { DefaultTheme } from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.MD};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.BLUE_DARK_400};
`;

export const Icon = styled(CaretLeft).attrs(
  ({ theme }: { theme: DefaultTheme }) => ({
    size: theme.FONT_SIZE.SM,
    color: theme.COLORS.BLUE_DARK_400,
  })
)``;
