import React from "react";
import styled from "styled-components";
import { WigoRoundIcon } from "../Svg";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  wigoPriceUsd?: number;
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

const WigoPrice: React.FC<Props> = ({ wigoPriceUsd, color = "wigoWhite" }) => {
  return wigoPriceUsd ? (
    <PriceLink
      href="https://wigoswap.io/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
      target="_blank"
    >
      <WigoRoundIcon width="24px" mr="8px" />
      <Text color={color}>{`$${wigoPriceUsd.toFixed(5)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={22} />
  );
};

export default React.memo(WigoPrice);
