import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
} from "@expo-google-fonts/ubuntu";

export default {
  COLORS: {
    WHITE_400: "#FFFFFF",
    WHITE_300: "#FFFFFF75",
    WHITE_200: "#FFFFFF50",
    WHITE_100: "#FFFFFF25",

    BLACK: "#030712",

    ORANGE: "#EF6C4E",
    YELLOW: "#FFB24B",
    GRAY: "#AEA8BA",

    BLUE_DARK_400: "#010B62",
    BLUE_DARK_300: "#010B6275",
    BLUE_DARK_200: "#010B6250",
    BLUE_DARK_100: "#010B6225",

    BLUE_LIGTH: "#01BAEF ",
  },
  FONT_FAMILY: useFonts({
    LIGTH: Ubuntu_300Light,
    REGULAR: Ubuntu_400Regular,
    MEDIUM: Ubuntu_500Medium,
    BOLD: Ubuntu_700Bold,
  }),
  FONT_SIZE: {
    SM: 14,
    MD: 16,
    LG: 18,
    XL: 24,
  },
};
