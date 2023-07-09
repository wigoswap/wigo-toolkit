import React from "react";
import FallingWiggies from "./FallingWiggies";

export default {
  title: "Components/FallingWiggies",
  component: FallingWiggies,
  argTypes: {},
};

export const Default: React.FC<React.PropsWithChildren<unknown>> = () => {
  return <FallingWiggies />;
};
