import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(
  ({ theme }: { theme: DefaultTheme }) => ({
    color: theme.COLORS.BLUE_DARK_400,
  })
);
