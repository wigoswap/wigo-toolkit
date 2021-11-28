import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 16 4" {...props}>
      <path d="M18,3.2c-0.7,0-1.2-0.6-1.2-1.2s0.6-1.2,1.2-1.2s1.2,0.6,1.2,1.2S18.7,3.2,18,3.2z" />
      <path d="M12,3.2c-0.7,0-1.2-0.6-1.2-1.2s0.6-1.2,1.2-1.2s1.2,0.6,1.2,1.2S12.7,3.2,12,3.2z" />
      <path d="M6,3.2C5.3,3.2,4.8,2.7,4.8,2S5.3,0.8,6,0.8S7.2,1.3,7.2,2S6.7,3.2,6,3.2z" />
    </Svg>
  );
};

export default Icon;
