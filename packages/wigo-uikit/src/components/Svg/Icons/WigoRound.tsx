import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <circle cx="16" cy="16" r="16" fill="#374EF5" />
      <path
        d="M372.6,255.5h29.2V110.2H255.5v29.2h96.4c-55.8,59.2-141.3,82.2-219.3,58.9l-14-4.2l-8.4,27.9l14,4.2
        c88.3,26.3,185,0.6,248.4-66.2V255.5z"
        fill="white"
      />
      <path
        d="M139.4,256.5h-29.2v145.3h146.3v-29.2h-96.4c55.8-59.2,141.3-82.2,219.3-58.9l14,4.2l8.4-27.9l-14-4.2
        c-88.3-26.3-185-0.6-248.4,66.2V256.5z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;
