import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <circle cx="16" cy="16" r="16" fill="#374EF5" />
      <path
        d="M21.5962 15.9755H23V9H15.9771V10.4H20.6038C17.9271 13.242 13.8202 14.3445 10.0749 13.2268L9.40242 13.0262L9 14.3674L9.67244 14.5681C13.9117 15.8331 18.5544 14.5963 21.5962 11.3911V15.9755Z"
        fill="white"
      />
      <path
        d="M10.4038 16.0245H9V23H16.0229V21.6H11.3962C14.0729 18.758 18.1798 17.6555 21.9251 18.7732L22.5976 18.9738L23 17.6326L22.3276 17.4319C18.0883 16.1669 13.4456 17.4037 10.4038 20.6089V16.0245Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;
