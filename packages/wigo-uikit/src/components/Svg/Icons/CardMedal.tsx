import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props, color) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <path
        id="medal"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={color}
        d="M28.8,0h-1.3l-5.2,12.9C21.1,12,19.6,11.3,18,11l4.4-11h-1.3l-4.4,10.8
	c-0.3,0-0.5,0-0.8,0c-0.3,0-0.6,0-0.8,0L10.8,0H9.5L14,11c-1.6,0.3-3.1,1-4.3,1.9L4.5,0H3.2l5.5,13.7c-2,1.9-3.3,4.6-3.3,7.7
	C5.4,27.2,10.2,32,16,32c5.8,0,10.6-4.7,10.6-10.6c0-3-1.3-5.8-3.3-7.7L28.8,0z M25.4,21.4c0,5.2-4.2,9.4-9.4,9.4
	c-5.2,0-9.4-4.2-9.4-9.4c0-5.2,4.2-9.4,9.4-9.4C21.2,12,25.4,16.2,25.4,21.4z M16,13.2c-4.5,0-8.2,3.7-8.2,8.2
	c0,4.5,3.7,8.2,8.2,8.2c4.5,0,8.2-3.7,8.2-8.2C24.2,16.8,20.5,13.2,16,13.2z"
      />
    </Svg>
  );
};

export default Icon;
