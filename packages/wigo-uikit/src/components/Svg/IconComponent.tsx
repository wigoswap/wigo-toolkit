import React from "react";
import * as IconModule from ".";
import { SvgProps } from "./types";

const Icons = IconModule as unknown as { [key: string]: React.FC<React.PropsWithChildren<SvgProps>> };

const IconComponent: React.FC<React.PropsWithChildren<{ iconName: string } & SvgProps>> = ({ iconName, ...props }) => {
  const IconElement = Icons[`${iconName}Icon`];
  return IconElement ? <IconElement {...props} /> : null;
};

export default IconComponent;
