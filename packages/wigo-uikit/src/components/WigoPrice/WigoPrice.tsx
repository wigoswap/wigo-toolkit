import React from "react";
import styled from "styled-components";
import { WigoRoundIcon } from "../Svg";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  wigoPriceUsd?: number;
  showSkeleton?: boolean;
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

const WigoPrice: React.FC<Props> = ({ wigoPriceUsd, color = "wigoWhite", showSkeleton = true }) => {
  return wigoPriceUsd ? (
    <PriceLink
      href="https://wigoswap.io/swap?outputCurrency=0xE992bEAb6659BFF447893641A378FbbF031C5bD6"
      target="_blank"
    >
      <WigoRoundIcon width="24px" mr="8px" />
      <Text color={color}>{`$${wigoPriceUsd.toFixed(4)}`}</Text>
    </PriceLink>
  ) : showSkeleton ? (
    <Skeleton width={80} height={22} />
  ) : null;
};

export default React.memo(WigoPrice);
