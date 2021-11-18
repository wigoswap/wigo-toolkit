import React from "react";
import styled, { keyframes } from "styled-components";
import Logo from "../Svg/Icons/Logo";
import { SpinnerProps } from "./types";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  position: relative;
`;

const RotatingWigoIcon = styled(Logo)`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${rotate} 3s cubic-bezier(0.9, 0, 0.2, 1.56) 1s infinite reverse both;
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
