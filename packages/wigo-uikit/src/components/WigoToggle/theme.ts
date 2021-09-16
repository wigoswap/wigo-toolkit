import { darkColors, lightColors } from "../../theme/colors";
import { WigoToggleTheme } from "./types";

export const light: WigoToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: WigoToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
