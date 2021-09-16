import React from "react";
import { WigoStack, WigoInput, WigoLabel } from "./StyledWigoToggle";
import { WigoToggleProps, scales } from "./types";

const WigoToggle: React.FC<WigoToggleProps> = ({ checked, scale = scales.LG, ...props }) => (
  <WigoStack scale={scale}>
    <WigoInput id={props.id || "wigo-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <WigoLabel scale={scale} checked={checked} htmlFor={props.id || "wigo-toggle"}>
      <div className="wigos">
        <div className="wigo" />
        <div className="wigo" />
        <div className="wigo" />
        <div className="butter" />
      </div>
    </WigoLabel>
  </WigoStack>
);

export default WigoToggle;
