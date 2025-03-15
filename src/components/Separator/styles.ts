import styled, { DefaultTheme } from "styled-components/native";

export const View = styled.View`
  height: 1px;
  width: 100%;
  margin: 16px 0;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.COLORS.BLUE_DARK_200};
`;
