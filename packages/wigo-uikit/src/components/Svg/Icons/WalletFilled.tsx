import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 28 28" {...props}>
      <path
        d="M19.5,14.5c-0.6,0-1,0.5-1,1c0,0.6,0.4,1,1,1c0.6,0,1-0.4,1-1S20.1,14.5,19.5,14.5z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M22.2,24.9H5.8c-1.8,0-3.3-1.5-3.3-3.3V5.8c0,0,0,0,0,0c0-1.5,1.2-2.7,2.8-2.7h14.6c0.6,0,1,0.4,1,1s-0.4,1-1,1H5.2c-0.4,0-0.8,0.3-0.8,0.8s0.3,0.8,0.8,0.8h16.9c1.8,0,3.3,1.5,3.3,3.3v11.7C25.5,23.4,24,24.9,22.2,24.9z M4.5,8.5v13.1c0,0.7,0.6,1.3,1.3,1.3h16.3c0.7,0,1.3-0.6,1.3-1.3V9.9c0-0.7-0.6-1.3-1.3-1.3H5.2C5,8.6,4.7,8.5,4.5,8.5z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default Icon;
