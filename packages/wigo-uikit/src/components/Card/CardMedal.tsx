import React from "react";
import styled, { DefaultTheme } from "styled-components";
import { CardMedalProps } from "./types";

interface StyledCardMedalProps extends CardMedalProps {
  theme: DefaultTheme;
}

const StyledCardMedal = styled.div<Partial<StyledCardMedalProps>>`
  z-index: 10;
  background-color: ${({ variantColor = "wigoBlue", theme }) => theme.colors[variantColor]};
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

  &:before,
  &:after {
    background-color: ${({ variantColor = "secondary", theme }) => theme.colors[variantColor]};
    content: "";
    height: 100%;
    margin: 0 -1px; /* Removes tiny gap */
    position: absolute;
    top: 0;
    width: 100%;
  }

  &:before {
    right: 100%;
  }

  &:after {
    left: 100%;
  }

  & > div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 96px;
  }
`;

const CardMedal: React.FC<CardMedalProps> = ({ variantColor, text, medalPosition, ...props }) => {
  return (
    <StyledCardMedal variantColor={variantColor} medalPosition={medalPosition} {...props}>
      <div title={text}>{text}</div>
    </StyledCardMedal>
  );
};

CardMedal.defaultProps = {
  medalPosition: "right",
};

export default CardMedal;
