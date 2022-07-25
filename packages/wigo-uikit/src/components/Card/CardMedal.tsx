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
  position: absolute;
  right: ${({ medalPosition }) => (medalPosition === "right" ? "20px" : "auto")};
  left: ${({ medalPosition }) => (medalPosition === "left" ? "20px" : "auto")};
  top: 0;
  text-align: center;
  width: 100px;

  & > div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100px;
    bottom: 25px;
    position: absolute;
    color: ${({ theme }) => theme.card.background};
    font-weight: bold;
    font-size: 20px;
  }
`;

const CardMedal: React.FC<CardMedalProps> = ({ variantColor, text, medalPosition, ...props }) => {
  return (
    <StyledCardMedal medalPosition={medalPosition} {...props}>
      <CardMedalIcon color={variantColor} width="100%" />
      <div title={text}>{text}</div>
    </StyledCardMedal>
  );
};

CardMedal.defaultProps = {
  medalPosition: "right",
};

export default CardMedal;
