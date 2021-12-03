import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <circle cx="16" cy="16" r="16" fill="#374EF5" />
      <path
        d="M23.3,16h1.8V6.8H16v1.8H22c-3.5,3.7-8.9,5.2-13.8,3.7l-0.9-0.3l-0.5,1.8l0.9,0.3c5.6,1.7,11.6,0,15.6-4.2V16z"
        fill="white"
      />
      <path
        d="M8.7,16H6.8v9.1H16v-1.8H10c3.5-3.7,8.9-5.2,13.8-3.7l0.9,0.3l0.5-1.8l-0.9-0.3c-5.6-1.7-11.6,0-15.6,4.2V16z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;
