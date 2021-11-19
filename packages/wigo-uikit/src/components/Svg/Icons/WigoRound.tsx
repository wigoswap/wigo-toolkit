import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <circle cx="16" cy="16" r="16" fill="#374EF5" />
      <path
        d="M23.4,16h1.9V6.7H16v1.9h6.1c-3.6,3.8-9,5.2-14,3.8l-0.9-0.3l-0.5,1.8l0.9,0.3c5.6,1.7,11.8,0,15.8-4.2V16z"
        fill="white"
      />
      <path
        d="M8.6,16H6.7v9.3H16v-1.9H9.9c3.6-3.8,9-5.2,14-3.8l0.9,0.3l0.5-1.8l-0.9-0.3c-5.6-1.7-11.8,0-15.8,4.2V16z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;
