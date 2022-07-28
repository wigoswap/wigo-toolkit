import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M1.3,20h5.3C7.4,20,8,19.4,8,18.7c0-0.7-0.6-1.3-1.3-1.3H1.3c-0.7,0-1.3,0.6-1.3,1.3C0,19.4,0.6,20,1.3,20z" />
      <path d="M0,5.3c0,0.7,0.6,1.3,1.3,1.3h21.3c0.7,0,1.3-0.6,1.3-1.3S23.4,4,22.7,4H1.3C0.6,4,0,4.6,0,5.3z" />
      <path d="M1.3,13.3h13.3c0.7,0,1.3-0.6,1.3-1.3s-0.6-1.3-1.3-1.3H1.3C0.6,10.7,0,11.3,0,12S0.6,13.3,1.3,13.3z" />
    </Svg>
  );
};

export default Icon;
