import styled from "styled-components";
import { Flex } from "../Box";

const StyledBottomNav = styled(Flex)`
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding: 5px 8px;
  background-color: #0c1822;
  padding-bottom: env(safe-area-inset-bottom);
  html[data-useragent*="TokenPocket_iOS"] & {
    padding-bottom: 45px;
  }
`;

export default StyledBottomNav;
