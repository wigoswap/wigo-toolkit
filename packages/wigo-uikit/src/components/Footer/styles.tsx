import styled from "styled-components";
import { baseColors, darkColors } from "../../theme/colors";
import { Box, Flex } from "../Box";
import SocialLinks from "./Components/SocialLinks";

export const StyledFooter = styled(Flex)`
  background: ${darkColors.footer};
  border-top: 1px solid #000000;
`;

export const StyledList = styled.ul`
  list-style: none;
  margin-bottom: 40px;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 0px;
  }
`;

export const StyledListItem = styled.li`
  font-size: 16px;
  margin-bottom: 8px;
  text-transform: capitalize;

  &:first-child {
    color: ${baseColors.wigoWhite};
    font-size: 24px;
    font-weight: 600;
  }
`;

export const StyledIconMobileContainer = styled(Box)`
  margin-bottom: 24px;
`;

export const StyledToolsContainer = styled(Flex)`
  padding: 14px;
  margin-bottom: 26px;
  background-color: rgba(255, 255, 255, 0.02);
  border-radius: 10px;

  ${({ theme }) => theme.mediaQueries.sm} {
    background-color: unset;
    padding: 0;
    margin-bottom: 0;
  }
`;

export const StyledSocialLinks = styled(SocialLinks)``;

export const StyledFooterBorder = styled.div`
  border-bottom: 1px solid #f0f0f0;
  opacity: 0.2;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 100px;
  display: none;
  margin-top: 20px;

  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
  }
`;
