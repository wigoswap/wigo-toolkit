import styled from "styled-components";
import { Flex } from "../Box";

const StyledSubMenuItems = styled(Flex)`
  background-color: ${({ theme }) => `${theme.colors.primaryMenu}`};
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default StyledSubMenuItems;
