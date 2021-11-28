import styled from "styled-components";
import { Text } from "../Text";
import { MOBILE_MENU_HEIGHT } from "../../widgets/Menu/config";

export const StyledBottomNavItem = styled.button`
  display: block;
  border: 0;
  background: transparent;
  cursor: pointer;
  height: ${MOBILE_MENU_HEIGHT}px;
  padding: 4px 12px;
`;

export const StyledBottomNavText = styled(Text)`
  display: -webkit-box;
  overflow: hidden;
  user-select: none;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
`;
