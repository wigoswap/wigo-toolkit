import { darkColors, lightColors } from "../../theme/colors";

export interface NavThemeType {
  background: string;
}

export const light: NavThemeType = {
  background: lightColors.primaryMenu,
};

export const dark: NavThemeType = {
  background: darkColors.primaryMenu,
};
