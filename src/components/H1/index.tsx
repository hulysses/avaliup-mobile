import { Text } from "./styles";

type H1Props = {
  children: string;
  marginBottom?: number;
};

export function H1({ marginBottom, children }: H1Props) {
  return <Text marginBottom={marginBottom ?? 0}>{children}</Text>;
}
