import styled from "styled-components";
import { StyledMenuItemProps } from "./types";

export const StyledMenuItemContainer = styled.div<StyledMenuItemProps>`
  position: relative;

  ${({ $isActive, $variant, theme }) =>
    $isActive &&
    $variant === "subMenu" &&
    `
      &:before{
        content: "";
        position: absolute;
        bottom: 0;
        height: 3px;
        width: 100%;
        background-color: ${theme.colors.wigoWhite};
        border-radius: 5px 5px 0 0;
      }
    `};
`;

const StyledMenuItem = styled.a<StyledMenuItemProps>`
  position: relative;
  display: flex;
  align-items: center;

  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.wigoBlue : theme.colors.wigoWhite)};
  font-size: 16px;
  font-weight: 400;

  ${({ $statusColor, theme }) =>
    $statusColor &&
    `
    &:after {
      content: "";
      border-radius: 100%;
      background: ${theme.colors[$statusColor]};
      height: 8px;
      width: 8px;
      margin-left: 6px;
    }
  `}

  ${({ $variant }) =>
    $variant === "default"
      ? `
    padding: 0 16px;
    height: 48px;
  `
      : `
    padding: 4px 4px 0px 4px;
    height: 42px;
  `}

  &:hover {
    color: ${({ theme }) => theme.colors.wigoBlue};
  }
`;

export default StyledMenuItem;
