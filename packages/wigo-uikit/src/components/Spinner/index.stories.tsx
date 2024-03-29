import React from "react";
import Spinner from "./Spinner";

export default {
  title: "Components/Spinner",
  component: Spinner,
  argTypes: {},
};

export const Default: React.FC<React.PropsWithChildren<unknown>> = () => {
  return <Spinner size={50} />;
};
