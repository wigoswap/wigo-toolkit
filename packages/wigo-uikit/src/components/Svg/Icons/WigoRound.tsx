import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <circle cx="16" cy="16" r="16" fill="#374EF5" />
      <path
        d="M 29.1549 21.5669 H 31.05 V 12.15 H 21.5691 V 14.04 H 27.8151 C 24.2016 17.8767 18.6573 19.3651 13.6011 17.8562 L 12.6932 17.5854 L 12.15 19.396 L 13.0577 19.6669 C 18.7808 21.3747 25.0484 19.705 29.1549 15.378 V 21.5669 Z"
        fill="white"
      />
      <path
        d="M 14.0451 21.6331 H 12.15 V 31.05 H 21.6309 V 29.16 H 15.3849 C 18.9984 25.3233 24.5427 23.8349 29.5989 25.3438 L 30.5068 25.6146 L 31.05 23.804 L 30.1423 23.5331 C 24.4192 21.8253 18.1516 23.495 14.0451 27.822 V 21.6331 Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;
