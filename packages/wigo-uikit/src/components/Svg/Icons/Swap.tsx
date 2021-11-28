import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M6.5 2.5L8 4L6.5 5.5" stroke="evenodd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M8 4H6C5.20435 4 4.44129 4.31607 3.87868 4.87868C3.31607 5.44129 3 6.20435 3 7"
        stroke="evenodd"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.5 21.5L16 20L17.5 18.5"
        stroke="evenodd"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 20H18C18.7956 20 19.5587 19.6839 20.1213 19.1213C20.6839 18.5587 21 17.7956 21 17"
        stroke="evenodd"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.5 20C8.41221 20 7.34884 19.6774 6.44437 19.0731C5.5399 18.4687 4.83495 17.6098 4.41867 16.6048C4.00238 15.5998 3.89346 14.4939 4.10568 13.427C4.3179 12.3601 4.84173 11.3801 5.61092 10.6109C6.3801 9.84173 7.36011 9.3179 8.42701 9.10568C9.4939 8.89346 10.5998 9.00238 11.6048 9.41867C12.6098 9.83495 13.4687 10.5399 14.0731 11.4444C14.6774 12.3488 15 13.4122 15 14.5C15 15.2223 14.8577 15.9375 14.5813 16.6048C14.3049 17.2721 13.8998 17.8784 13.3891 18.3891C12.8784 18.8998 12.2721 19.3049 11.6048 19.5813C10.9375 19.8577 10.2223 20 9.5 20Z"
        stroke="evenodd"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.68896 13.479L9.49997 12.666V15.914"
        stroke="evenodd"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.69092 15.916H10.3087"
        stroke="evenodd"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.6108 5.66316C11.6423 4.63171 13.0412 4.05225 14.4999 4.05225C15.9586 4.05225 17.3576 4.63171 18.389 5.66316C19.4205 6.69461 19.9999 8.09356 19.9999 9.55225C19.9999 11.0109 19.4205 12.4099 18.389 13.4413"
        stroke="evenodd"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Icon;
