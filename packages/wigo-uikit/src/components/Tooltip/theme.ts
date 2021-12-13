import { shadows } from "../../theme/base";
import { darkColors, lightColors, baseColors } from "../../theme/colors";
import { TooltipTheme } from "./types";

export const light: TooltipTheme = {
  background: darkColors.backgroundAlt,
  text: darkColors.text,
  boxShadow: shadows.tooltip,
};

export const dark: TooltipTheme = {
  background: baseColors.wigoWhite,
  text: darkColors.textDark,
  boxShadow: shadows.tooltip,
};
