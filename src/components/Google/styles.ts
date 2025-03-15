import styled from "styled-components";
import AntDesign from "@expo/vector-icons/AntDesign";
import { DefaultTheme } from "styled-components/native";

export const GoogleIcon = styled(AntDesign).attrs(
  ({ theme }: { theme: DefaultTheme }) => ({
    color: theme.COLORS.BLUE_DARK_400,
    name: "google",
    size: 16,
  })
)`
    margin-right: 8px;
`;
