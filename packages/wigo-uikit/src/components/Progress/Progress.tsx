import React from "react";
import StyledProgress, { Bar } from "./StyledProgress";
import ProgressWiggyWrapper from "./ProgressWiggyWrapper";
import { ProgressWiggy } from "../Svg";
import { ProgressProps, variants, scales } from "./types";

const stepGuard = (step: number) => {
  if (step < 0) {
    return 0;
  }

  if (step > 100) {
    return 100;
  }

  return step;
};

const Progress: React.FC<React.PropsWithChildren<ProgressProps>> = ({
  variant = variants.ROUND,
  scale = scales.MD,
  primaryStep = 0,
  secondaryStep = null,
  showProgressWiggy = false,
  useDark = true,
}) => {
  return (
    <StyledProgress $useDark={useDark} variant={variant} scale={scale}>
      {showProgressWiggy && (
        <ProgressWiggyWrapper style={{ left: `${stepGuard(primaryStep)}%` }}>
          <ProgressWiggy />
        </ProgressWiggyWrapper>
      )}
      <Bar $useDark={useDark} primary style={{ width: `${stepGuard(primaryStep)}%` }} />
      {secondaryStep ? <Bar $useDark={useDark} style={{ width: `${stepGuard(secondaryStep)}%` }} /> : null}
    </StyledProgress>
  );
};

export default Progress;
