import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.3,1.6v21.8c0,0.6,0.7,0.9,1.1,0.5l9.2-9.2c0.2-0.2,0.6-0.2,0.8,0l9.2,9.2c0.4,0.4,1.1,0.1,1.1-0.5V1.6
	C22.7,0.7,22,0,21.1,0H2.9C2,0,1.3,0.7,1.3,1.6z M20.2,18.8l-7.8-7.8c-0.2-0.2-0.6-0.2-0.8,0l-7.8,7.8V2.5h16.4V18.8z"
      />
    </Svg>
  );
};

export default Icon;
