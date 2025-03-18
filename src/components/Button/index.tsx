import { Loading } from "@components/Loading";
import { TouchableOpacity, ButtonText, Icon } from "./styles";
import { Ionicons } from "@expo/vector-icons";

type ButtonProps = {
  text: string;
  type: "fill" | "border" | "none";
  isLoading?: boolean;
  icon?: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
};

export function Button({
  text,
  type = "fill",
  isLoading = false,
  icon,
  onPress,
}: ButtonProps) {
  return (
    <TouchableOpacity
      type={type}
      activeOpacity={0.6}
      onPress={onPress}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {icon ? <Icon name={icon} /> : null}
          <ButtonText type={type}>{text}</ButtonText>
        </>
      )}
    </TouchableOpacity>
  );
}
