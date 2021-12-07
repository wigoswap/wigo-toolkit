import styled from "styled-components";
import Image from "./Image";

const TokenImage = styled(Image)`
  &:before {
    border-radius: 50%;
    content: "";
    box-shadow: -1px -1px 10px -1px rgb(21 32 41);
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 7;
  }
`;

export default TokenImage;
