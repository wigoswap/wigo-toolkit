import React from "react";
import styled from "styled-components";
import { FtmRoundIcon } from "../Svg";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  ftmPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const FtmPrice: React.FC<Props> = ({ ftmPriceUsd, color = "wigoWhite" }) => {
  return ftmPriceUsd ? (
    <PriceLink href="https://wigoswap.io/swap?inputCurrency=0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83" target="_blank">
      <FtmRoundIcon width="24px" mr="8px" />
      <Text color={color}>{`$${ftmPriceUsd.toFixed(2)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={22} />
  );
};

export default React.memo(FtmPrice);
