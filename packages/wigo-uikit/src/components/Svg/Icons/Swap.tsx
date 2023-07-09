import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        d="M6.5,6.2C6.3,6.2,6.1,6.2,6,6C5.7,5.7,5.7,5.3,6,5l1-1L6,3C5.7,2.7,5.7,2.3,6,2S6.7,1.7,7,2l1.5,1.5
		c0.3,0.3,0.3,0.8,0,1.1L7,6C6.9,6.2,6.7,6.2,6.5,6.2z"
      />
      <path
        d="M3,7.8C2.6,7.8,2.2,7.4,2.2,7c0-1,0.4-1.9,1.1-2.7C4.1,3.6,5,3.2,6,3.2h2c0.4,0,0.8,0.3,0.8,0.8S8.4,4.8,8,4.8
		H6C5.4,4.8,4.8,5,4.4,5.4C4,5.8,3.8,6.4,3.8,7C3.8,7.4,3.4,7.8,3,7.8z"
      />
      <path
        d="M17.5,22.2c-0.2,0-0.4-0.1-0.5-0.2l-1.5-1.5c-0.3-0.3-0.3-0.8,0-1.1L17,18c0.3-0.3,0.8-0.3,1.1,0
		s0.3,0.8,0,1.1l-1,1l1,1c0.3,0.3,0.3,0.8,0,1.1C17.9,22.2,17.7,22.2,17.5,22.2z"
      />
      <path
        d="M18,20.8h-2c-0.4,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8h2c0.6,0,1.2-0.2,1.6-0.7s0.7-1,0.7-1.6
		c0-0.4,0.3-0.8,0.8-0.8s0.8,0.3,0.8,0.8c0,1-0.4,1.9-1.1,2.7S19,20.8,18,20.8z"
      />
      <path
        d="M9.5,20.8c-1.2,0-2.4-0.4-3.5-1.1C5,19,4.2,18,3.7,16.9c-0.5-1.1-0.6-2.4-0.4-3.6c0.2-1.2,0.8-2.3,1.7-3.2
		s2-1.5,3.2-1.7c1.2-0.2,2.5-0.1,3.6,0.4C13,9.2,14,10,14.7,11c0.7,1,1.1,2.2,1.1,3.5c0,0.8-0.2,1.6-0.5,2.4c-0.3,0.8-0.8,1.4-1.4,2
		c-0.6,0.6-1.3,1-2,1.4C11.1,20.6,10.3,20.8,9.5,20.8z M9.5,9.7c-0.3,0-0.6,0-0.9,0.1c-0.9,0.2-1.8,0.6-2.4,1.3S5,12.6,4.8,13.6
		c-0.2,0.9-0.1,1.9,0.3,2.7c0.4,0.9,1,1.6,1.8,2.1c1.3,0.9,3,1,4.5,0.4c0.6-0.2,1.1-0.6,1.5-1c0.4-0.4,0.8-1,1-1.5
		c0.2-0.6,0.4-1.2,0.4-1.8c0-0.9-0.3-1.9-0.8-2.6c-0.5-0.8-1.3-1.4-2.1-1.8C10.7,9.9,10.1,9.7,9.5,9.7z"
      />
      <path
        d="M9.5,16.7c-0.4,0-0.8-0.3-0.8-0.8v-1.7c-0.2,0-0.4-0.1-0.6-0.2c-0.3-0.3-0.3-0.8,0-1.1L9,12.1
		c0.2-0.2,0.5-0.3,0.8-0.2c0.3,0.1,0.5,0.4,0.5,0.7v3.2C10.2,16.3,9.9,16.7,9.5,16.7z"
      />
      <path d="M10.3,16.7H8.7c-0.4,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8h1.6c0.4,0,0.8,0.3,0.8,0.8S10.7,16.7,10.3,16.7z" />
      <path
        d="M18.4,14.2c-0.2,0-0.4-0.1-0.5-0.2c-0.3-0.3-0.3-0.8,0-1.1c0.9-0.9,1.4-2.1,1.4-3.4s-0.5-2.5-1.4-3.4
		s-2.1-1.4-3.4-1.4S12,5.3,11.1,6.2c-0.3,0.3-0.8,0.3-1.1,0s-0.3-0.8,0-1.1c1.2-1.2,2.8-1.8,4.4-1.8c1.7,0,3.2,0.6,4.4,1.8
		c1.2,1.2,1.8,2.7,1.8,4.4s-0.7,3.2-1.8,4.4C18.8,14.1,18.6,14.2,18.4,14.2z"
      />
    </Svg>
  );
};

export default Icon;
