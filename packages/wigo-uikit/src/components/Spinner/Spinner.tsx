import React from "react";
import styled, { keyframes } from "styled-components";
import Logo from "../Svg/Icons/Logo";
import { SpinnerProps } from "./types";

const rotate = keyframes`
  from {
    transform: rotate(360deg);
  }
  5% {
    transform: rotate(360deg);
  }
  50% {
    transform: rotate(180deg);
  }
  55% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

const Container = styled.div`
  position: relative;
`;

const RotatingWigoIcon = styled(Logo)`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${rotate} 2s ease-out infinite;
  animation-delay: 0.5s;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <RotatingWigoIcon width={`${size * 0.5}px`} />
    </Container>
  );
};

export default Spinner;
