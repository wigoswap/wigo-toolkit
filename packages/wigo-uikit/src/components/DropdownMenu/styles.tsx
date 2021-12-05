import styled, { DefaultTheme } from "styled-components";
import { Colors } from "../../theme";
import { Text } from "../Text";
import { StyledDropdownMenuItemProps } from "./types";

const getTextColor = ({
  $isActive,
  disabled,
  theme,
}: StyledDropdownMenuItemProps & { theme: DefaultTheme; $isActive: boolean }) => {
  if (disabled) return theme.colors.textDisabled;
  if ($isActive) return theme.colors.wigoBlue;

  return theme.colors.textDark;
};

export const DropdownMenuItem = styled.button<StyledDropdownMenuItemProps & { $isActive: boolean }>`
  align-items: center;
  border: 0;
  background: transparent;
  color: ${({ theme, disabled, $isActive }) => getTextColor({ theme, disabled, $isActive })};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-weight: ${({ $isActive = false }) => ($isActive ? "400" : "400")};
  display: flex;
  font-size: 16px;
  height: 48px;
  justify-content: space-between;
  outline: 0;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.cardBorder};
    color: ${({ theme }) => theme.colors.wigoBlue};
  }

  &:active:not(:disabled) {
    opacity: 0.85;
    transform: translateY(1px);
  }
`;

export const StyledDropdownMenuItemContainer = styled.div<{ $isBottomNav: boolean }>`
  &:first-child > ${DropdownMenuItem} {
    border-top-left-radius: ${({ $isBottomNav }) => ($isBottomNav ? "20px" : "10px")};
    border-top-right-radius: ${({ $isBottomNav }) => ($isBottomNav ? "20px" : "10px")};
  }

  &:last-child > ${DropdownMenuItem} {
    border-bottom-left-radius: ${({ $isBottomNav }) => ($isBottomNav ? "0" : "10px")};
    border-bottom-right-radius: ${({ $isBottomNav }) => ($isBottomNav ? "0" : "10px")};
  }
`;

export const DropdownMenuDivider = styled.hr`
  border-color: ${({ theme }) => theme.colors.cardBorder};
  border-style: solid;
  border-width: 1px 0 0;
  margin: 0;
`;

export const StyledOverlay = styled.div`
  content: "";
  position: fixed;
  top: 0;
  bottom: 70px;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => `${theme.colors.overlay}`};
  opacity: 0.8;
`;

export const StyledDropdownMenu = styled.div<{ $isOpen: boolean; $isBottomNav: boolean }>`
  background-color: #ffffff;
  border-radius: ${({ $isBottomNav }) => ($isBottomNav ? "20px 20px 0 0" : "10px")};
  pointer-events: auto;
  width: ${({ $isBottomNav }) => ($isBottomNav ? "100%" : "200px")};
  visibility: visible;
  z-index: 1001;
  box-shadow: ${({ $isBottomNav }) => ($isBottomNav ? "unset" : "0px 0px 10px 0px rgb(0 0 0 / 20%)")};

  ${({ $isOpen }) =>
    !$isOpen &&
    `
    pointer-events: none;
    visibility: hidden;
  `}
`;

export const LinkStatus = styled(Text)<{ color: keyof Colors }>`
  border-radius: ${({ theme }) => theme.radii.default};
  padding: 0 8px;
  border: 2px solid;
  border-color: ${({ theme, color }) => theme.colors[color]};
  box-shadow: none;
  color: ${({ theme, color }) => theme.colors[color]};
  margin-left: 8px;
`;
