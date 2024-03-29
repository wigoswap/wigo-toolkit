import React from "react";
import useMatchBreakpoints from "./useMatchBreakpoints";

export default {
  title: "Hooks/useMatchBreakpoints",
  argTypes: {},
};

export const Default: React.FC<React.PropsWithChildren<unknown>> = () => {
  const state = useMatchBreakpoints();

  return (
    <div style={{ padding: "32px" }}>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};
