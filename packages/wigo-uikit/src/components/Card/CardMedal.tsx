import React from "react";
import styled, { DefaultTheme } from "styled-components";
import { CardMedalIcon } from "../Svg";
import { CardMedalProps } from "./types";

interface StyledCardMedalProps extends CardMedalProps {
  theme: DefaultTheme;
}

const StyledCardMedal = styled.div<Partial<StyledCardMedalProps>>`
  z-index: 10;
  color: white;
  margin: 0;
  padding: 0;
  padding: 8px 0;
  position: absolute;
  right: ${({ medalPosition }) => (medalPosition === "right" ? 0 : "auto")};
  top: 0;
  text-align: center;
  transform: translateX(30%) translateY(0%) rotate(45deg);
  transform: ${({ medalPosition }) =>
    medalPosition === "right"
      ? "translateX(30%) translateY(0%) rotate(45deg)"
      : "translateX(0%) translateY(200%) rotate(-45deg)"};
  transform-origin: top left;
  width: 96px;

  & > div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 96px;
  }
`;

const CardMedal: React.FC<CardMedalProps> = ({ variantColor, text, medalPosition, ...props }) => {
  return (
    <StyledCardMedal medalPosition={medalPosition} {...props}>
      <CardMedalIcon color={variantColor} />
      <div title={text}>{text}</div>
    </StyledCardMedal>
  );
};

CardMedal.defaultProps = {
  medalPosition: "right",
};

export default CardMedal;
