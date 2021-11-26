import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const primaryColor = theme.isDark ? "#efefef" : "#efefef";
  const secondaryColor = theme.isDark ? "#939393" : "#939393";

  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <circle fill={primaryColor} cx="16" cy="16" r="16" />
      <rect fill={secondaryColor} x="7.1" y="6.9" width="17.8" height="17.8" />
      <path fill={secondaryColor} d="M24.9,27.2v2.1C22.3,31,19.3,32,16,32s-6.3-1-8.9-2.7v-2.1H24.9z" />
      <g>
        <circle fill={primaryColor} cx="11.8" cy="12.7" r="1.5" />
        <circle fill={primaryColor} cx="20.2" cy="12.7" r="1.5" />
      </g>
    </Svg>
  );
};

export default Icon;
