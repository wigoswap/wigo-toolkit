import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
  const secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";

  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <circle fill={primaryColor} cx="16" cy="16" r="16" />
      <rect x="7.8" y="6" fill={secondaryColor} width="16.5" height="16.5" />
      <path fill={secondaryColor} d="M24.2,24.9v4.8C21.8,31.2,19,32,16,32s-5.8-0.8-8.2-2.3v-4.8H24.2z" />
      <g>
        <circle fill={primaryColor} cx="12.3" cy="10.7" r="1.5" />
        <circle fill={primaryColor} cx="19.7" cy="10.7" r="1.5" />
      </g>
    </Svg>
  );
};

export default Icon;
