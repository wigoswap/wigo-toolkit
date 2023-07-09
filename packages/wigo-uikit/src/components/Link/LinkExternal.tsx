import React from "react";
import Link from "./Link";
import { LinkProps } from "./types";
import OpenNewIcon from "../Svg/Icons/OpenNew";

const LinkExternal: React.FC<React.PropsWithChildren<LinkProps>> = ({ children, ...props }) => {
  return (
    <Link external {...props}>
      <OpenNewIcon width="18px" color={props.color ? props.color : "primary"} mr="4px" />
      {children}
    </Link>
  );
};

export default LinkExternal;
