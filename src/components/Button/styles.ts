import styled, { DefaultTheme } from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

type ButtonProps = {
  type: "fill" | "border";
};

const getBackgroundColor = ({
  theme,
  type,
}: {
  theme: DefaultTheme;
  type: "fill" | "border";
}) => (type === "fill" ? theme.COLORS.BLUE_DARK_400 : "transparent");

const getBorder = ({
  theme,
  type,
}: {
  theme: DefaultTheme;
  type: "fill" | "border";
}) => (type === "border" ? `1px solid ${theme.COLORS.BLUE_DARK_400}` : "none");

const getTextColor = ({
  theme,
  type,
}: {
  theme: DefaultTheme;
  type: "fill" | "border";
}) => (type === "border" ? theme.COLORS.BLUE_DARK_400 : theme.COLORS.WHITE_400);

export const TouchableOpacity = styled.TouchableOpacity<ButtonProps>`
  flex-direction: row;
  gap: 8px;
  background-color: ${getBackgroundColor};
  padding: 12px 0;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: ${getBorder};
`;

export const ButtonText = styled.Text<ButtonProps>`
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.MD};
  color: ${getTextColor};
`;

export const Icon = styled(Ionicons).attrs(
  ({ theme }: { theme: DefaultTheme }) => ({
    size: theme.FONT_SIZE.SM,
    color: getTextColor({ theme, type: "border" }),
  })
)``;
