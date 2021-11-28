import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 16 4" {...props}>
      <path d="M14,3.2c-0.7,0-1.2-0.6-1.2-1.2s0.6-1.2,1.2-1.2s1.2,0.6,1.2,1.2S14.7,3.2,14,3.2z" />
      <path d="M8,3.2C7.3,3.2,6.8,2.7,6.8,2S7.3,0.8,8,0.8S9.2,1.3,9.2,2S8.7,3.2,8,3.2z" />
      <path d="M2,3.2C1.3,3.2,0.8,2.7,0.8,2S1.3,0.8,2,0.8S3.2,1.3,3.2,2S2.7,3.2,2,3.2z" />{" "}
    </Svg>
  );
};

export default Icon;
