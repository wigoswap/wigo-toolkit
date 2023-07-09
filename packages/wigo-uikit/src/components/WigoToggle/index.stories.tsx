import React, { useState } from "react";
import WigoToggle from "./WigoToggle";

export default {
  title: "Components/WigoToggle",
  component: WigoToggle,
};

export const Default: React.FC<React.PropsWithChildren<unknown>> = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <WigoToggle checked={isChecked} onChange={toggle} />
      </div>
      <div style={{ marginBottom: "32px" }}>
        <WigoToggle checked={isChecked} onChange={toggle} scale="md" />
      </div>
      <div>
        <WigoToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
