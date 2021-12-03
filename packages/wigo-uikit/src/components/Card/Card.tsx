import React from "react";
import { StyledCard, StyledCardInner } from "./StyledCard";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ ribbon, children, background, borderRadius, ...props }) => {
  return (
    <StyledCard {...props}>
      <StyledCardInner borderRadius={borderRadius} background={background} hasCustomBorder={!!props.borderBackground}>
        {ribbon}
        {children}
      </StyledCardInner>
    </StyledCard>
  );
};
export default Card;
