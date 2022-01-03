import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="coinbase_wallet">
          <rect id="Rectangle" fill="#1660FF" x="0" y="0" width="512" height="512"></rect>
          <path
            d="M256,76 C355.411255,76 436,156.588745 436,256 C436,355.411255 355.411255,436 256,436 C156.588745,436 76,355.411255 76,256 C76,156.588745 156.588745,76 256,76 Z M304,198 L208,198 C202.477153,198 198,202.477153 198,208 L198,208 L198,304 C198,309.522847 202.477153,314 208,314 L208,314 L304,314 C309.522847,314 314,309.522847 314,304 L314,304 L314,208 C314,202.477153 309.522847,198 304,198 L304,198 Z"
            id="Combined-Shape"
            fill="#FFFFFF"
          ></path>
        </g>
      </g>
    </Svg>
  );
};

export default Icon;
