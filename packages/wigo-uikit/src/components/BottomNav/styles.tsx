import styled from "styled-components";
import { Flex } from "../Box";

const StyledBottomNav = styled(Flex)`
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding: 0 8px;
  background-color: rgba(6, 24, 42, 1);
  z-index: 20;
`;

export default StyledBottomNav;
